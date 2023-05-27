# 可视化大屏项目

## 命令

- 安装依赖 `pnpm install`
- 启动项目 `pnpm dev`
- 打包项目 `pnpm build`

### Todo List

- [ ] @/view/home/.../header 抽取公共组件
- [x] @/component/chart/ChartWrap/ChartWrap.jsx 高阶组件功能设计不合理
- [ ] 懒加载占位组件未开发
- [x] @/view/home/chart/ChartLayout.jsx 使用 Context 实现 Header 选择列数, Content 显示列数功能, 考虑是否使用状态管理器重构此功能(已重构)
- [ ] @/view/chart/content 图表创建页面, 选择数据、选择图表、配置图三个表子组件有独立 store slice, 考虑是否将其三个 slice 融合为一个 slice
- [ ] @/view/chart/content/selectData/SelectData.jsx 页面, 数据预览功能未开发, 期待功能: 左侧 json 高亮展示, 右侧表格展示
- [ ] @/view/chart/content 图表编辑三个子页面数据预拉以及取缓存功能待开发
- [x] @/mock/chartData/getChartPresetMockConfig/barChartPreset.js 横向图表 xy 轴数据反转功能未实现, 导致 bar 组件显示有问题(已解决, 对 Bar 组件配置使 xy 轴数据默认反转)
- [x] @/view/chart/content/selectChart 抽取公共 Select 组件, 在 SelectData 和 SelectChart 中使用(已完成)
- [ ] @/view/chart/content/selectChart Header 未开发, 期待功能: 存放 Select, 视图列数选择功能
- [ ] @/view/chart/content/selectChart 侧边栏 Menu 导航未开发, 期待功能: 一级导航: 图表大分类(柱状图, 饼图...), 二级导航: 图表小分类(基础柱状图, 堆叠柱状图...)
- [ ] @/view/chart/ChartLayout.jsx 图表预览卡片, 图表标题显示未开发, 期待功能: 能够显示图表标题, 并且能够编辑标题

## 安装插件(可选)

- eslint 插件 - 代码检查
- Prettier 插件 - 代码格式化
- CSS Modules 插件 - 代码提示与跳转
- jest - 单元测试

## 项目介绍

- 可以配置单个图表
- 可以拖动图表配置数据大屏

## 名词介绍

- chart - 单个图表
- dashboard - 由多个图表组成的大屏

## 技术选型

- React 18
- React Router 6 路由
- Sass + CSS Module 样式(模块化 CSS)
- redux + react-redux + redux/toolkit 状态管理
- ant-design/charts 组件库, 使用了其中的

  - G2Plot 图表库
  - And Design UI 组件库

### 工程化配置

- Workspace 已配置(.vscode/settings.json), 保存时自动格式化

- 工程化技术选型

  1. Vite 预览/打包
  2. ESlint 代码检查
  3. Prettier 代码格式化
  4. husky git 提交前自动格式化
  5. pnpm 包管理工具
  6. jest 单元测试(仅用于工具函数的测试)
