// @ts-ignore
/* eslint-disable */
// import {request} from '@umijs/max';
import request from '@/plugins/globalRequest'
/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索用户 GET /api/user/search*/
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request< API.BaseResponse<API.RegisterResult>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索菜品 GET /api/dish/search*/
export async function searchDishes(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentDish[]>>('/api/dish/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新菜品 Post /api/dish/update */
export async function updateDish(body: API.CurrentDish, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentDish>>('/api/dish/update', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 删除菜品 Post /api/dish/delete*/
export async function deleteDish(body: API.CurrentDish, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.DeleteDishResult>>('/api/dish/delete', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户下单 Post /api/dish/order */
export async function order(body: API.CurrentDish[], options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.OrderResult>>('/api/dish/order', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索订单 GET /api/order/search*/
export async function searchOrders(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.OrderInfo[]>>('/api/order/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前订单的所有菜品 POST /api/detail/getDishesByOrderId */
export async function getDishesByOrderId(body: number, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentDish[]>>('/api/detail/getDish', {
    method: 'GET',
    params: {
      orderId: body,
    },
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 更新订单 Get /api/order/update */
export async function updateOrder(body: API.UpdateOrderParam, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.OrderInfo>>('/api/order/update', {
    method: 'Get',
    params: {
      id: body.id,
      status: body.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data:{
      method: 'update',
      ...(options || {}),
    }
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data:{
      method: 'post',
      ...(options || {}),
    }
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'POST',
    data:{
      method: 'delete',
      ...(options || {}),
    }
  });
}
