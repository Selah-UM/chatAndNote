'use strict';
const request = require('supertest');
const app = require('../app');

describe('login', () => {
    test('ログインのためのリンクが含まれる', async () => {
        await request(app)
            .get('/login')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(/<a href="\/auth\/github"/)
            .expect(200)
    });
});