import {searchUsers} from '@/services/ant-design-pro/api';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {PageContainer, ProTable,} from '@ant-design/pro-components';
import '@umijs/max';
import {Image, Input} from 'antd';
import React, {useRef, useState} from 'react';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
// const handleAdd = async (fields: API.RuleListItem) => {
//   const hide = message.loading('正在添加');
//   try {
//     await addRule({
//       ...fields,
//     });
//     hide();
//     message.success('Added successfully');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Adding failed, please try again!');
//     return false;
//   }
// };

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

// todo: 删除用户的接口
// const handleRemove = async (selectedRows: API.CurrentUser[]) => {
//   const hide = message.loading('正在删除');
//   if (!selectedRows) return true;
//   try {
//     await removeRule({
//       key: selectedRows.map((row) => row.key),
//     });
//     hide();
//     message.success('Deleted successfully and will refresh soon');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Delete failed, please try again');
//     return false;
//   }
// };
const ManageUser =  () => {
  const [, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [, setCurrentRow] = useState<API.CurrentUser>();
  const [, setSelectedRows] = useState<API.CurrentUser[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.CurrentUser>[] = [
    {
      title: '用户名',
      dataIndex: 'username',
      valueType: 'textarea',
      copyable: true,
      // render: (dom, entity) => { todo: 点击昵称显示详情页
      //   return (
      //     <a
      //       onClick={() => {
      //         setCurrentRow(entity);
      //         setShowDetail(true);
      //       }}
      //     >
      //       {dom}
      //     </a>
      //   );
      // },
    },
    {
      title: '账号',
      copyable: true,
      dataIndex: 'userAccount',
      valueType:  'textarea',
    },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      render: (_, record) => (
        <div>
          <Image src={record.avatarUrl} width={50} height={50} />
        </div>
      )
    },
    {
      title: '性别',
      dataIndex: 'gender',
      hideInForm: true,
      valueEnum: {
        1: {
          text: '男',
          status: 'Default',
        },
        0: {
          text: '女',
          status: 'Processing',
        },
      },
    },
    {
      title: '电话',
      dataIndex: 'phone',
      valueType:  'textarea',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType:  'textarea',
    },
    {
      title: '角色',
      dataIndex: 'userRole',
      valueType: 'select',
      valueEnum: {
        1: {
          text: '管理员',
          status: 'Processing',
        },
        0: {
          text: '普通成员',
          status: 'Default',
        },
      },
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'creatTime',
      valueType: 'dateTime',
      renderFormItem: (item, {defaultRender, ...rest}, form) => {
        const status = form.getFieldValue('status');
        if (`${status}` === '0') {
          return false;
        }
        if (`${status}` === '3') {
          return <Input {...rest} placeholder={'请输入异常原因！'}/>;
        }
        return defaultRender(item);
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a key="subscribeAlert" href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
          操作一
        </a>,
        <a key="subscribeAlert" href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
          操作二
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.CurrentUser, API.PageParams>
        headerTitle={'查询用户'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        // toolBarRender={() => [
        //   <Button
        //     type="primary"
        //     key="primary"
        //     onClick={() => {
        //       handleModalOpen(true);
        //     }}
        //   >
        //     <PlusOutlined/> 新建
        //   </Button>,
        // ]},
        request={async (params = {}, sort, filter) => {
          const userList = await searchUsers();
          return {
            data: userList
        }}}
        columns={columns}
        // todo: 行选择
         rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {/*{selectedRowsState?.length > 0 && (   todo: 批量操作 */}
      {/*  <FooterToolbar*/}
      {/*    extra={*/}
      {/*      <div>*/}
      {/*        已选择{' '}*/}
      {/*        <a*/}
      {/*          style={{*/}
      {/*            fontWeight: 600,*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          {selectedRowsState.length}*/}
      {/*        </a>{' '}*/}
      {/*        项 &nbsp;&nbsp;*/}
      {/*        /!*<span> *!/*/}
      {/*        /!*  服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万*!/*/}
      {/*        /!*</span>*!/*/}
      {/*      </div>*/}
      {/*    }*/}
      {/*  >*/}
      {/*    /!*<Button *!/*/}
      {/*    /!*  onClick={async () => {*!/*/}
      {/*    /!*    await handleRemove(selectedRowsState);*!/*/}
      {/*    /!*    setSelectedRows([]);*!/*/}
      {/*    /!*    actionRef.current?.reloadAndRest?.();*!/*/}
      {/*    /!*  }}*!/*/}
      {/*    /!*>*!/*/}
      {/*    /!*  批量删除*!/*/}
      {/*    /!*</Button>*!/*/}
      {/*    /!*<Button type="primary">批量审批</Button>*!/*/}
      {/*  </FooterToolbar>*/}
      {/*)}*/}

      {/*<ModalForm*/}
      {/*  title={'新建规则'}*/}
      {/*  width="400px"*/}
      {/*  open={createModalOpen}*/}
      {/*  onOpenChange={handleModalOpen}*/}
      {/*  onFinish={async (value) => {*/}
      {/*    const success = await handleAdd(value as API.RuleListItem);*/}
      {/*    if (success) {*/}
      {/*      handleModalOpen(false);*/}
      {/*      if (actionRef.current) {*/}
      {/*        actionRef.current.reload();*/}
      {/*      }*/}
      {/*    }*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <ProFormText*/}
      {/*    rules={[*/}
      {/*      {*/}
      {/*        required: true,*/}
      {/*        message: '规则名称为必填项',*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*    width="md"*/}
      {/*    name="name"*/}
      {/*  />*/}
      {/*  <ProFormTextArea width="md" name="desc" />*/}
      {/*</ModalForm>*/}
    </PageContainer>
  );
};

export default ManageUser;
