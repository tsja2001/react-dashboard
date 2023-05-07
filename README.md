# 可视化大屏项目

## 命令

- 安装依赖 `pnpm install`

- 启动项目 `pnpm dev`

- 打包项目 `pnpm build`

## 安装插件(建议)

- eslint 插件 - 代码检查

- Prettier 插件 - 代码格式化

- CSS Modules 插件 - 代码提示与跳转

## 项目介绍

- 可以配置单个图表
- 可以拖动图表配置数据大屏

## 技术选型

- React 18
- React Router 6 路由
- Sass + CSS Module 样式
- ant-design/charts 组件库, 使用了其中的
  - G2Plot 图表库
  - And Design UI 组件库

### 工程化配置

- 工程化技术选型

1. Vite 预览/打包
2. ESlint 代码检查
3. Prettier 代码格式化
4. husky Git 提交前自动格式化
5. pnpm 包管理工具

- 已配置.vscode/settings.json 保存时自动格式化
