'use strict';
const request = require('supertest');
const app = require('../app');
const passportStub = require('passport-stub');
// const app = require('../app');

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