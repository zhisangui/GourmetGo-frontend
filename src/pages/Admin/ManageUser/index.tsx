import {searchUsers} from '@/services/ant-design-pro/api';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {PageContainer, ProTable} from '@ant-design/pro-components';
import '@umijs/max';
import React, {useRef} from 'react';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
// todo: 增加用户的接口
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
/*const handleRemove = async (selectedRows: API.CurrentUser[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};*/

const ManageUser = () => {
  const actionRef = useRef<ActionType>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.CurrentUser>[] = [
    {
      dataIndex: 'index',
      align: 'center',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '用户名',
      align: 'center',
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
      align: 'center',
      dataIndex: 'userAccount',
      valueType: 'textarea',

    },
    /*{
      title: '头像',
      dataIndex: 'avatarUrl',
      render: (_, record) => (
        <div>
          <Image src={record.avatarUrl} width={50} height={50} />
        </div>
      )
    },*/
    /*{
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
    },*/
    /*{
      title: '电话',
      dataIndex: 'phone',
      valueType:  'textarea',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType:  'textarea',
    },*/
    {
      title: '角色',
      align: 'center',
      dataIndex: 'userRole',
      valueType: 'select',
      valueEnum: {
        1: {
          text: '商家',
          status: 'Success'
        },
        0: {
          text: '顾客',
          status: 'Processing',
        },
      },
    },
    // {
    //   title: '创建时间',
    //   key: 'showTime',
    //   dataIndex: 'createTime',
    //   sorter: true,
    //   valueType: 'dateTime',
    //   renderFormItem: (item, {defaultRender, ...rest}, form) => {
    //     const status = form.getFieldValue('status');
    //     if (`${status}` === '0') {
    //       return false;
    //     }
    //     if (`${status}` === '3') {
    //       return <Input {...rest} placeholder={'请输入异常原因！'}/>;
    //     }
    //     return defaultRender(item);
    //   },
    {
      title: '创建时间',
      key: 'showTime',
      align: 'center',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.CurrentUser, API.PageParams>
        headerTitle={'用户信息'}
        actionRef={actionRef}
        rowKey="key"
        request={async (params = {}, sort, filter) => {
          const userList = await searchUsers();
          return {
            data: userList
          }
        }}
        columns={columns}
        search={false}

        // search={{
        //   labelWidth: 120,
        // }}
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
        /*// todo: 行选择
         rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}*/
      />
      {/*{selectedRowsState?.length > 0 && (   todo: 批量操作
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}

      <ModalForm
        title={'新建规则'}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.RuleListItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '规则名称为必填项',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>*/}
    </PageContainer>
  );
};

export default ManageUser;
