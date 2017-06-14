module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  baseURL: 'http://localhost:8000/api/v1',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://192.168.1.109:8000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  basicAuthorization: 'Basic emxpbXNfYmU6emxpbXNfYmU=',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    posts: '/posts',
    user: '/user/:id',
    dashboard: '/dashboard',
  },
}
