import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = "执伞鬼出品";
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[      // todo：将下面修改为自己的内容
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://docs.qq.com/doc/DUG93dVNHbVZjZXpo',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/zhisangui',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
