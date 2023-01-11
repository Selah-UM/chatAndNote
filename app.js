var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet'); // セキュリティ対策　：　X-Powered-By　ヘッダの除去
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv'); //環境変数を追加するために

// モデルの読み込み
const User = require('./models/user');
const Room = require('./models/room');
User.sync().then(async () => {
  Room.belongsTo(User, {foreignKey: 'createdBy'});
  Room.sync();
});

//GitHub認証関連
dotenv.config();
const env = process.env;
// console.log(env.GITHUB_CLIENT_ID);
// console.log(env.GITHUB_CLIENT_SECRET);
const GitHubStrategy = require('passport-github2').Strategy;
const GITHUB_CLIENT_ID = env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = env.GITHUB_CLIENT_SECRET;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID     : GITHUB_CLIENT_ID,
  clientSecret : GITHUB_CLIENT_SECRET,
  callbackURL  : 'http://localhost:8000/auth/github/callback'
},function (accessToken, refreshToken, profile, done){
  process.nextTick(async function () {
    await User.upsert({
      id: profile.id,
      username: profile.username
    });
    done(null, profile);
  });
}));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const chatRoomsRouter = require('./routes/chat-rooms');

var app = express();
// app.use(helmet());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret            : env.SESSION_SECRET,
  resave            : false,
  saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/chatRooms', chatRoomsRouter);

app.get('/auth/github',
  passport.authenticate('github',{ scope: ['user:email'] }),
  function(req, res){
    console.log("認証実行時に必要なログはここに");
});
app.get('/auth/github/callback',
  passport.authenticate('github',{ failureRedirect: '/login' }), //認証に失敗したときのリダイレクト
  function(req, res){
    res.redirect('/');//認証に成功したときのリダイレクト
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
