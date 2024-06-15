/*import {searchDishes} from '@/services/ant-design-pro/api';
import {ProTable, PageContainer, ProColumns, type ActionType} from '@ant-design/pro-components';
import {useRef} from "react";
import {Image, Table, Space} from "antd";

const CustomerOrder = () => {

  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.CurrentDish>[] = [
    {
      dataIndex: 'index',
      // align: 'center',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '菜名',
      dataIndex: 'name',
      // align: 'center',
      valueType: 'textarea',
      width: 180,
    },
    {
      title: '价格',
      dataIndex: 'price',
      // align: 'center',
      valueType: 'textarea',
      width: 180,
    },
    {
      title: '图片',
      // align: 'center',
      dataIndex: 'dishUrl',
      render: (_, record) => (
        <div>
          <Image src={record.dishUrl} width={100} height={100}/>
        </div>
      ),
      width: 280,
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      // align: 'center',
      width: 310,
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.CurrentDish, API.PageParams>
        headerTitle="菜单"
        actionRef={actionRef}
        columns={columns}
        search={false}
        pagination={{
          pageSize: 3, // 每页显示3条数据
          showQuickJumper: true,
        }}
        rowKey="key"
        request={async (params = {}, sort, filter) => {
          const dishList = await searchDishes();
          return {
            data: dishList
          }
        }}
      />
    </PageContainer>
  );

};
export default CustomerOrder;*/


import {searchDishes, order} from '@/services/ant-design-pro/api';
import {ProTable, PageContainer, ProColumns, type ActionType} from '@ant-design/pro-components';
import {useRef} from "react";
import {Image, Table, Space, message} from "antd";

const CustomerOrder = () => {

  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.CurrentDish>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '菜名',
      dataIndex: 'name',
      valueType: 'textarea',
      width: 180,
    },
    {
      title: '价格',
      dataIndex: 'price',
      valueType: 'textarea',
      width: 180,
    },
    {
      title: '图片',
      dataIndex: 'dishUrl',
      render: (_, record) => (
        <div>
          <Image src={record.dishUrl} width={100} height={100}/>
        </div>
      ),
      width: 280,
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      width: 310,
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CurrentDish, API.PageParams>
        headerTitle="菜单"
        actionRef={actionRef}
        columns={columns}
        search={false}
        pagination={{
          pageSize: 3,
          showQuickJumper: true,
        }}
        rowKey="id"   // 当rowKey对应的id 在列表中没有返回，或者不是唯一的，就会出现选中一行，结果视图上选中了多行，此时，只需要把rowKey对应的id改成后端返回的列表数据中的唯一id项就可以了
        request={async (params = {}, sort, filter) => {
          const dishList = await searchDishes();
          return {
            data: dishList,
          };
        }}
        rowSelection={{
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
          defaultSelectedRowKeys: [],  // 默认选中的行
        }}
        tableAlertRender={({selectedRowKeys, selectedRows, onCleanSelected}) => (
          <Space size={24}>
            <span>
              已选 {selectedRowKeys.length} 项
              <a style={{marginInlineStart: 8}} onClick={onCleanSelected}>
                取消选择
              </a>
            </span>
            <span>{`总价格: ${selectedRows.reduce((pre, item) => pre + item.price, 0)} 元`}</span>
          </Space>
        )}
        tableAlertOptionRender={({selectedRows}) => (
          <Space size={16}>
            <a onClick={ async () => {
              const res = await order(selectedRows);
              if (res) {
                message.success("下单成功");
              } else {
                message.success("下单失败");
              }
            }}>下单</a>
          </Space>
        )}
      />
    </PageContainer>
  );
};

export default CustomerOrder;


// import type { ProColumns } from '@ant-design/pro-components';
// import { ProTable } from '@ant-design/pro-components';
// import { Button, DatePicker, Space, Table } from 'antd';
//
// const { RangePicker } = DatePicker;
//
// const valueEnum = {
//   0: 'close',
//   1: 'running',
//   2: 'online',
//   3: 'error',
// };
//
// const ProcessMap = {
//   close: 'normal',
//   running: 'active',
//   online: 'success',
//   error: 'exception',
// } as const;
//
// export type TableListItem = {
//   key: number;
//   name: string;
//   progress: number;
//   containers: number;
//   callNumber: number;
//   creator: string;
//   status: string;
//   createdAt: number;
//   memo: string;
// };
// const tableListDataSource: TableListItem[] = [];
//
// const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
//
// for (let i = 0; i < 50; i += 1) {
//   tableListDataSource.push({
//     key: i,
//     name: 'AppName-' + i,
//     containers: Math.floor(Math.random() * 20),
//     callNumber: Math.floor(Math.random() * 2000),
//     progress: Math.ceil(Math.random() * 100) + 1,
//     creator: creators[Math.floor(Math.random() * creators.length)],
//     status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
//     createdAt: Date.now() - Math.floor(Math.random() * 100000),
//     memo:
//       i % 2 === 1
//         ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
//         : '简短备注文案',
//   });
// }
//
// const columns: ProColumns<TableListItem>[] = [
//   {
//     title: '应用名称',
//     width: 120,
//     dataIndex: 'name',
//     fixed: 'left',
//     render: (_) => <a>{_}</a>,
//   },
//   {
//     title: '容器数量',
//     width: 120,
//     dataIndex: 'containers',
//     align: 'right',
//     search: false,
//     sorter: (a, b) => a.containers - b.containers,
//   },
//   {
//     title: '调用次数',
//     width: 120,
//     align: 'right',
//     dataIndex: 'callNumber',
//   },
//   {
//     title: '执行进度',
//     dataIndex: 'progress',
//     valueType: (item) => ({
//       type: 'progress',
//       status: ProcessMap[item.status as 'close'],
//     }),
//   },
//   {
//     title: '创建者',
//     width: 120,
//     dataIndex: 'creator',
//     valueType: 'select',
//     valueEnum: {
//       all: { text: '全部' },
//       付小小: { text: '付小小' },
//       曲丽丽: { text: '曲丽丽' },
//       林东东: { text: '林东东' },
//       陈帅帅: { text: '陈帅帅' },
//       兼某某: { text: '兼某某' },
//     },
//   },
//   {
//     title: '创建时间',
//     width: 140,
//     key: 'since',
//     dataIndex: 'createdAt',
//     valueType: 'date',
//     sorter: (a, b) => a.createdAt - b.createdAt,
//     renderFormItem: () => {
//       return <RangePicker />;
//     },
//   },
//   {
//     title: '备注',
//     dataIndex: 'memo',
//     ellipsis: true,
//     copyable: true,
//     search: false,
//   },
//   {
//     title: '操作',
//     width: 80,
//     key: 'option',
//     valueType: 'option',
//     fixed: 'right',
//     render: () => [<a key="link">链路</a>],
//   },
// ];
//
// export default () => {
//   return (
//     <ProTable<TableListItem>
//       columns={columns}
//       rowSelection={{
//         // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
//         // 注释该行则默认不显示下拉选项
//         selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
//         defaultSelectedRowKeys: [1],
//       }}
//       tableAlertRender={({
//                            selectedRowKeys,
//                            selectedRows,
//                            onCleanSelected,
//                          }) => {
//         console.log(selectedRowKeys, selectedRows);
//         return (
//           <Space size={24}>
//             <span>
//               已选 {selectedRowKeys.length} 项
//               <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
//                 取消选择
//               </a>
//             </span>
//             <span>{`容器数量: ${selectedRows.reduce(
//               (pre, item) => pre + item.containers,
//               0,
//             )} 个`}</span>
//             <span>{`调用量: ${selectedRows.reduce(
//               (pre, item) => pre + item.callNumber,
//               0,
//             )} 次`}</span>
//           </Space>
//         );
//       }}
//       tableAlertOptionRender={() => {
//         return (
//           <Space size={16}>
//             <a>批量删除</a>
//             <a>导出数据</a>
//           </Space>
//         );
//       }}
//       dataSource={tableListDataSource}
//       scroll={{ x: 1300 }}
//       options={false}
//       search={false}
//       pagination={{
//         pageSize: 5,
//       }}
//       rowKey="key"
//       headerTitle="批量操作"
//       toolBarRender={() => [<Button key="show">查看日志</Button>]}
//     />
//   );
// };
