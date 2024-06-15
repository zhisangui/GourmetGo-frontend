import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
const Admin: React.FC = () => {
  return (
    <PageContainer content={' 商家管理后台 '}>
      <Card>
        <Alert
          message={'美食即兴，畅享不停！'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> 美食 <HeartTwoTone twoToneColor="#eb2f96" /> 即行
        </Typography.Title>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageContainer>
  );
};
export default Admin;
