export default [

  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {path: '/customer', name: '下单', icon: 'crown', access: 'canCustomer', component: './Customer',},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},

  {
    path: '/user',
    layout: false,
    routes: [
      {path: '/user/login', name: '登录', component: './User/Login'},
      {path: '/user/register', name: '注册', component: './User/Register'}
    ],
  },
  {
    path: '/admin',
    name: '管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', component: './Admin'},
      {path: '/admin/manage-user', name: '用户管理', component: './Admin/ManageUser'},
      {path: '/admin/manage-dish', name: '菜品管理', component: './Admin/ManageDish'},
      {path: '/admin/manage-order', name: '订单管理', component: './Admin/ManageOrder'},
    ],
  },
];
