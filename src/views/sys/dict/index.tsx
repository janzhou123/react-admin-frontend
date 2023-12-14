import React, { useState } from "react";
import { Form, Input, Button, Table, Space, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface DataType {
	key: React.Key;
	dictValue: string;
	dictKey: string;
	sort: number;
}

const Dict = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState<DataType[]>([]);
	const [visible, setVisible] = useState(false);
	const [editRecord, setEditRecord] = useState<DataType>();

	const columns: ColumnsType<DataType> = [
		{ title: "字典名称", dataIndex: "dictValue", key: "dictValue" },
		{ title: "字典编号", dataIndex: "dictKey", key: "dictKey" },
		{ title: "排序", dataIndex: "sort", key: "sort" },
		// { title: "Email", dataIndex: "email", key: "email" },
		{
			title: "操作",
			key: "action",
			render: (text: any, record: DataType) => (
				<Space size="middle">
					<a onClick={() => handleEdit(record)}>修改</a>
					<a onClick={() => handleDelete(record)}>删除</a>
					<a onClick={() => handleEdit(record)}>查看</a>
					<a onClick={() => handleEdit(record)}>列表</a>
				</Space>
			)
		}
	];

	const handleSearch = () => {
		const data1 = [{ key: 1, dictValue: "11111", dictKey: "100", sort: 1 }];
		setData(data1);
		// 在这里执行查询操作，然后将结果设置到 data 状态
	};

	const handleReset = () => {
		form.resetFields();
	};

	const handleAdd = () => {
		setVisible(true);
		const data: DataType = {
			key: "",
			dictKey: "",
			dictValue: "",
			sort: 0
		};
		setEditRecord(data);
	};

	const handleEdit = (record: DataType) => {
		setVisible(true);
		setEditRecord(record);
	};

	const handleDelete = (record: DataType) => {
		console.log("record :>> ", record);
		console.log("editRecord :>> ", editRecord);
		// 在这里执行删除操作，然后更新 data 状态
	};

	const handleExport = () => {
		// 在这里执行导出操作
	};

	const handleOk = () => {
		// 在这里执行新增或修改操作，然后更新 data 状态
		setVisible(false);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	return (
		<div>
			<Form form={form} layout="inline" style={{ marginBottom: "20px" }}>
				<Form.Item name="dictValue" label="字典名称">
					<Input placeholder="请输入字典名称" />
				</Form.Item>
				<Form.Item name="dictKey" label="字典编号">
					<Input placeholder="请输入字典编号" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" onClick={handleSearch} style={{ marginRight: "10px" }}>
						查询
					</Button>
					<Button onClick={handleReset} style={{ marginRight: "10px" }}>
						重置
					</Button>
					<Button type="primary" onClick={handleAdd} style={{ marginRight: "10px" }}>
						新增
					</Button>
					<Button type="primary" icon={<DownloadOutlined />} onClick={handleExport}>
						导出
					</Button>
				</Form.Item>
			</Form>
			<Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 10 }} />
			<Modal title="编辑" visible={visible} onOk={handleOk} onCancel={handleCancel}>
				<Form form={form}>
					<Form.Item name="name" label="姓名">
						<Input />
					</Form.Item>
					<Form.Item name="age" label="年龄">
						<Input />
					</Form.Item>
					<Form.Item name="address" label="地址">
						<Input />
					</Form.Item>
					<Form.Item name="email" label="Email">
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default Dict;
