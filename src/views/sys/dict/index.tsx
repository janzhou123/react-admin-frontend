import React, { useState } from "react";
import { Form, Input, Button, Table, Space, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
	email: string;
}

const Dict = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState<DataType[]>([]);
	const [visible, setVisible] = useState(false);
	const [editRecord, setEditRecord] = useState<DataType>();

	const columns: ColumnsType<DataType> = [
		{ title: "姓名", dataIndex: "name", key: "name" },
		{ title: "年龄", dataIndex: "age", key: "age" },
		{ title: "地址", dataIndex: "address", key: "address" },
		{ title: "Email", dataIndex: "email", key: "email" },
		{
			title: "操作",
			key: "action",
			render: (text: any, record: DataType) => (
				<Space size="middle">
					<a onClick={() => handleEdit(record)}>编辑</a>
					<a onClick={() => handleDelete(record)}>删除</a>
				</Space>
			)
		}
	];

	const handleSearch = () => {
		const data1 = [{ key: 1, name: "11111", age: 100, address: "3000", email: "33333" }];
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
			name: "",
			age: 0,
			address: "",
			email: ""
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
				<Form.Item name="name" label="姓名">
					<Input placeholder="请输入姓名" />
				</Form.Item>
				<Form.Item name="age" label="年龄">
					<Input placeholder="请输入年龄" />
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
