// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: nunber;
    username?: string;
    userAccount?: string;
    createTime?: string;
    userRole?: number;
  };

  type UpdateOrderParam = {
    id?: number;
    status?: number;
  }

  type CurrentDish = {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    dishUrl?: string;
    createTime: string;
  }


  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number

  type DeleteDishResult = boolean;
  type OrderResult = boolean;

  type OrderInfo = {
    id?: number;
    username?: string;
    totalAmount?: number;
    orderTime?: string;
    status?: number;
    createTime?: string;
    dishList?: CurrentDish[];
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    password?: string;
    checkPassword?: boolean;
    type?: string;
  };

  type BaseResponse<T> = {
    code: number,
    data: T,
    msg: string,
    description: string,
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
