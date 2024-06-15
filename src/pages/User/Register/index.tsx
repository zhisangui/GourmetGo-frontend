import {Footer} from '@/components';
import {register} from '@/services/ant-design-pro/api';
import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import {Helmet, history} from '@umijs/max';
import {message, Tabs} from 'antd';
import {createStyles} from 'antd-style';
import React, {useState} from 'react';
import Settings from '../../../../config/defaultSettings';
import {GUIDE_LINK, SYSTEM_LOGO} from "@/constants";
import {Col, Row} from "antd/lib/grid";
import {Link} from "@@/exports";

const useStyles = createStyles(({token}) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const Lang = () => {
  return;
};
const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const {styles} = useStyles();
  const handleSubmit = async (values: API.RegisterParams) => {
    const {password, checkPassword} = values;
    if (password !== checkPassword) {
      message.error("两次输入的密码不一致");
      return;
    }
    try {
      // 注册
      const id = await register({
        ...values,
        type,
      });
      //   if (id > 0) {
      //     const defaultLoginSuccessMessage = '注册成功！';
      //     message.success(defaultLoginSuccessMessage);
      //     const urlParams = new URL(window.location.href).searchParams;
      //     history.push(urlParams.get('redirect') || '/');
      //     return;
      //   }
      //   console.log(id);
      // } catch (error) {
      //   const defaultLoginFailureMessage = '注册失败，请重试！';
      //   console.log(error);
      //   message.error(defaultLoginFailureMessage);
      // }
      if (id) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        // 此方法会跳转到redirect参数所在的位置
        if (!history) return;
        const { query } = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        // const {query} = history.location;
        // const {redirect} = query as {
        //   redirect: string;
        // }
        // history.push('/user/login?redirect=' + redirect);
        return;
      }
    } catch (error : any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <Lang/>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          submitter={{searchConfig: {submitText: '注册'}}}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="美食即行"
          subTitle={"一站式线上点餐平台，让您随时随地轻松享用美味！"}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}

        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '注册账号',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined/>,
                }}
                placeholder={'请输入用户账号'}
                rules={[
                  {
                    required: true,
                    message: '用户账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8',
                  }
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={'请再次输入您的密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8',
                  }
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >

            <Row gutter={8} align="middle" justify="center">
              <Col flex="auto" style={{textAlign: 'center'}}>
                <Link to="/user/login">已有账号，进行登录</Link>
              </Col>
            </Row>


          </div>
        </LoginForm>

      </div>
      <Footer/>
    </div>
  );
};
export default Register;
