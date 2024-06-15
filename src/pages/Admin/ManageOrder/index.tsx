// import {searchDishes, updateDish, deleteDish} from '@/services/ant-design-pro/api';
// import {
//   type ActionType,
//   EditableProTable,
//   PageContainer,
//   ProCard,
//   ProColumns,
//   ProForm
// } from '@ant-design/pro-components';
// import React, {useRef, useState} from "react";
// import {Image} from "antd";
//
// const ManageDish = () => {
//   const actionRef = useRef<ActionType>();
//   const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
//   const [dataSource, setDataSource] = useState<API.CurrentDish[]>([]);
//   const formRef = useRef<any>();
//   const editableFormRef = useRef<any>();
//
//
//   const columns: ProColumns<API.CurrentDish>[] = [
//     {
//       dataIndex: 'index',
//       valueType: 'indexBorder',
//       width: 48,
//     },
//     {
//       title: '菜名',
//       dataIndex: 'name',
//       valueType: 'textarea',
//       width: 180,
//     },
//     {
//       title: '价格',
//       dataIndex: 'price',
//       valueType: 'textarea',
//       width: 180,
//     },
//     {
//       title: '图片',
//       dataIndex: 'dishUrl',
//       render: (_, record) => (
//         <div>
//           <Image src={record.dishUrl} width={100} height={100}/>
//         </div>
//       ),
//       width: 280,
//     },
//     {
//       title: '描述',
//       dataIndex: 'description',
//       valueType: 'textarea',
//       width: 310,
//     },
//     {
//       title: '操作',
//       valueType: 'option',
//       render: (_, row) => [
//         <a
//           key="delete"
//           onClick={async () => {
//             const res = await deleteDish(row);
//             if (res) {  // todo： res && res.data 就判断失败
//               alert('移除成功');
//               const tableDataSource = formRef.current?.getFieldValue(
//                 'table',
//               ) as API.CurrentDish[];
//               formRef.current?.setFieldsValue({
//                 table: tableDataSource.filter((item) => item.id !== row?.id),
//               });
//             } else {
//               alert('移除失败')
//             }
//           }}
//         >
//           移除
//         </a>,
//         <a
//           key="edit"
//           onClick={() => {
//             actionRef.current?.startEditable(row.id);
//           }}
//         >
//           编辑
//         </a>,
//       ],
//     },
//   ];
//
//   return (
//     <PageContainer>
//       <ProCard>
//
//           <EditableProTable<API.CurrentDish, API.PageParams>
//             headerTitle="菜品信息"
//             columns={columns}
//             search={false}
//             rowKey="id"           // 进行行内编辑的关键,选择到指定行
//             value={dataSource}
//             name="table"
//             actionRef={actionRef}
//             editableFormRef={editableFormRef}
//             pagination={{
//               pageSize: 5, // 每页显示3条数据
//               showQuickJumper: true,
//             }}
//             recordCreatorProps={{
//               record: (index) => {
//                 return {id: index + 1};
//               },
//             }}
//             editable={{
//               type: 'multiple',
//               editableKeys,
//               onChange: setEditableRowKeys,
//               onSave: async (key, row, originRow) => {
//                 // 调用更新接口
//                 const success = await updateDish(row);
//                 if (success) {  // todo: success && success.data 报错
//                   alert('更新成功');
//                 } else {
//                   alert('更新失败');
//                 }
//               },
//               actionRender: (row, _, dom) => [dom.save, dom.cancel],
//             }}
//             request={async (params = {}, sort, filter) => {
//               const dishList = await searchDishes();
//               setDataSource(dishList);
//               return {
//                 data: dishList
//               }
//             }}
//           />
//
//       </ProCard>
//     </PageContainer>
//   );
// };
//
// export default ManageDish;
//

import {searchOrders, updateOrder} from '@/services/ant-design-pro/api';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {EditableProTable, PageContainer, ProCard, ProTable} from '@ant-design/pro-components';
import {Image, Tag, Select} from 'antd';
import React, {useRef, useState} from "react";


export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const editableFormRef = useRef<any>();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.OrderInfo>[] = [
    {
      title: '用户名',
      width: 120,
      dataIndex: 'username',
      align: 'center',
      editable: false,
    },
    {
      title: '下单时间',
      width: 120,
      dataIndex: 'orderTime',
      valueType: "dateTime",
      align: 'center',
      editable: false,
    },
    {
      title: '订单总额',
      width: 120,
      dataIndex: 'totalAmount',
      align: 'center',
      editable: false,
    },
    {
      title: '订单状态',
      width: 120,
      dataIndex: 'status',
      valueType: 'select',
      render: (_, record) => (
        <Tag color={record.status === 1 ? 'green' : 'blue'}>{record.status === 1 ? '已完成' : '进行中'}</Tag>
      ),
      renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
        if (type === 'form' || type === 'table') {
          return (
            <Select {...rest} placeholder="请选择订单状态">
              <Option value={0}>0-进行中</Option>
              <Option value={1}>1-已完成</Option>
            </Select>
          );
        }
        return defaultRender(_);
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      render: (_, row) => [
        <a
          key="edit"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  const expandedRowRender = (row) => {
    return (
      <ProTable<API.CurrentDish>
        columns={[
          {dataIndex: 'index', valueType: 'indexBorder', width: 48, editable: false,},
          {title: '菜品', dataIndex: 'name', key: 'name'},
          {
            title: '图片',
            dataIndex: 'dishUrl',
            key: 'dishUrl',
            editable: false,
            render: (_, record) => (
              <div>
                <Image src={record.dishUrl} width={100} height={100}/>
              </div>
            ),
          },
        ]}
        headerTitle={false}
        search={false}
        options={false}
        pagination={false}
        dataSource={row.dishList}
      />
    );
  };

  return (
    <PageContainer>
      <ProCard>
        <EditableProTable<API.OrderInfo>
          // recordCreatorProps={{
          //   record: (index) => {
          //     return {id: index + 1};
          //   },
          // }} todo: 控制新增一行的行为
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            onSave: async (key, row, originRow) => {
              // 调用更新接口
              let param:API.UpdateOrderParam = {
                id : row.id,
                status : row.status,
              };
              const success = await updateOrder(param);
              if (success) {  // todo: success && success.data 报错
                alert('更新成功');
              } else {
                alert('更新失败');
              }
            },
            actionRender: (row, _, dom) => [dom.save, dom.cancel],
          }}

          request={async (params, sorter, filter) => {
            const orderList = await searchOrders();
            /* 用户 id 换为用户名*/
            return Promise.resolve({
              data: orderList,
              success: true,
            });
          }}
          columns={columns}
          rowKey="id"
          pagination={{
            showQuickJumper: true,
          }}
          expandable={{expandedRowRender}}
          search={false}
          dateFormatter="string"
          headerTitle="订单信息"
          options={false}
          // 引用，用于获取和操作可编辑表单的实例 （人话：将各行的实例显示出来以供修改）
          actionRef={actionRef}
          editableFormRef={editableFormRef}
        />
      </ProCard>
    </PageContainer>

  );
};
