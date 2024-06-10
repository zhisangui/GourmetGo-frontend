export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' }
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin',component: './Admin' },
      { path: '/admin/manage-user', name: '管理用户', component: './Admin/ManageUser' },
    ],
  },
  // { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
