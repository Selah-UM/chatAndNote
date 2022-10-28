'use strict';
const request = require('supertest');
const app = require('../app');
const passportStub = require('passport-stub');
const User = require('../models/user');
const Room = require('../models/room');

describe('index', () => { 
    beforeAll(() => {
        passportStub.install(app);
        passportStub.login({ username: 'testuser' });
    });
    afterAll(() => {
        passportStub.logout();
        passportStub.uninstall();
    });

    test('ログイン時はログアウトのためのリンクが含まれる', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(/<a href="\/logout"/)
            .expect(200)
    });
    test('ログイン時はユーザー名が表示される', async () => {
        await request(app)
            .get('/')
            .expect(/testuser/)
            .expect(200)
    });
});
describe('index', () => {
    test('ログアウト時はログインのためのリンクが含まれる', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(/<a href="\/login"/)
            .expect(200)
    });
});

describe('login', () => {
    beforeAll(() => {
        passportStub.install(app);
        passportStub.login({ username: 'testuser' });
    });
    afterAll(() => {
        passportStub.logout();
        passportStub.uninstall();
    });

    test('GitHubログインのためのリンクが含まれる', async () => {
        await request(app)
            .get('/login')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(/<a href="\/auth\/github"/)
            .expect(200)
    });
});

describe('logout', () => {
    test('/にリダイレクトされる',async () => {
        await request(app)
            .get('/logout')
            .expect('Location', '/')
            .expect(302)
    });
});

describe('/chatRooms', () => {
    let id = '';
    beforeAll(() => {
        passportStub.install(app);
        passportStub.login({ id: 0, username: 'testuser' });
    });
  
    afterAll(async () => {
        passportStub.logout();
        passportStub.uninstall();
    
        // テストで作成したデータを削除
        const r = await Room.findByPk(id)
        await r.destroy()
    });
  
    test('チャットルームが作成でき、表示される', async () => {
        await User.upsert({ id: 0, username: 'testuser' });
        const res = await request(app)
            .post('/chatRooms')
            .send({
                roomId: '00000000',
                roomName: 'chat room 1',
                passcode: 'passcode1',
                isPermanent: false
            })
            .expect('Location', /chatRooms/)
            .expect(302)
  
        const createdChatRoomPath = res.headers.location;
        id = createdChatRoomPath.split('/chatRooms/')[1];
        await request(app)
            .get(createdChatRoomPath)
            .expect(/chat room 1/)
            .expect(200)
    });
});