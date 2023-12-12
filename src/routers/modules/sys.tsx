import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const sysRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "系统管理"
		},
		children: [
			{
				path: "/sys/dict",
				element: lazyLoad(React.lazy(() => import("@/views/sys/dict/index"))),
				meta: {
					requiresAuth: true,
					title: "系统字典",
					key: "dict"
				}
			}
		]
	}
];

export default sysRouter;
