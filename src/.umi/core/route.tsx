// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"登录","path":"/user/login","parentId":"1","id":"2"},"3":{"name":"注册","path":"/user/register","parentId":"1","id":"3"},"4":{"path":"/welcome","name":"欢迎","icon":"smile","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/admin","name":"管理","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"5"},"6":{"path":"/admin","parentId":"5","id":"6"},"7":{"path":"/admin/manage-user","name":"管理用户","parentId":"5","id":"7"},"8":{"path":"/","redirect":"/welcome","parentId":"ant-design-pro-layout","id":"8"},"9":{"path":"*","layout":false,"id":"9"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__User__Register__index" */'@/pages/User/Register/index.tsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__Welcome" */'@/pages/Welcome.tsx')),
'5': React.lazy(() => import('./EmptyRoute')),
'6': React.lazy(() => import(/* webpackChunkName: "p__Admin" */'@/pages/Admin.tsx')),
'7': React.lazy(() => import(/* webpackChunkName: "p__Admin__ManageUser__index" */'@/pages/Admin/ManageUser/index.tsx')),
'8': React.lazy(() => import('./EmptyRoute')),
'9': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'E:/code/starProject/usercenter/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'E:/code/starProject/usercenter/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}