module.exports = {
	base: '/yui/',
	title: "Heaven UI - 经典前端 UI 框架",
	description: "Heaven UI是一套开源的 Web UI 解决方案,其内部采用的是自身经典的模块化规范,并遵循原生 HTML/CSS/JS 的开发方式,极易上手,拿来即用。其外在极简,却又不失饱满的内在,体积轻盈,是一款轻量、可靠、好用的 Vue 组件库",
	themeConfig: {
		search: false, //禁用默认的搜索框
		globalLayout: "/components/layout/GlobalLayout.vue",
		searchMaxSuggestions: 10, //搜索条数
		displayAllHeaders: true, //自动生成侧栏
		sidebar: "auto",
		nav: [{
			text: "指南",
			link: "/guide/introduce"
		},
		{
			text: "组件",
			link: "/component/installation",
		},
		{
			text: "Github",
			link: "https://github.com/hujinbin/Heaven-UI",
			target: "_blank",
		},
		],
		sidebar: {
			'/guide': [
				{
					title: "介绍",
					collapsable: false,
					children: ["/guide/introduce.md"],
				},
			],
			'/component': [{
				title: "开发指南",
				collapsable: false,
				children: [
					"/component/installation",
					"/component/quickstart"
				],
			},
			{
				title: "组件",
				collapsable: false,
				children: [
					"/component/button",
				],
			},
			],
		},
	},
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}],
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
};