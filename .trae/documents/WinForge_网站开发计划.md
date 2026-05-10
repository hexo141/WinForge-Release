# WinForge 静态网站开发计划

## 项目概述
创建一个纯静态的 WinForge 网站，包含主标题、下载按钮、截图展示和 NProgress 加载进度条。

## 技术栈
- HTML5 + CSS3 + JavaScript
- NProgress.js 库（用于页面加载进度条）
- 纯静态文件，无需服务器端处理

## 文件结构
```
WinForge/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 主脚本（NProgress 初始化等）
├── lib/
│   ├── nprogress.js    # NProgress 库
│   └── nprogress.css   # NProgress 样式
├── images/
│   └── screenshot.png  # 截图占位图
└── release/
    └── latest.exe      # 下载文件（用户自行放置）
```

## 实施步骤

### 1. 创建目录结构
- 在项目根目录下创建 WinForge 网站文件夹
- 创建 css, js, lib, images, release 子目录

### 2. 实现 index.html
- 设置基本 HTML5 结构
- 引入 NProgress CSS 和 JS 库
- 引入自定义 CSS 和 JS
- 添加主标题（h1）：WinForge
- 添加下载按钮：链接到 release/latest.exe
- 添加截图展示区域：使用 img 标签
- 添加页脚信息（可选）

### 3. 实现 css/style.css
- 设计现代化的深色/科技感主题
- 主标题样式：大字体、居中、渐变色或发光效果
- 下载按钮样式：醒目的 CTA 按钮，悬停效果
- 截图区域样式：圆角、阴影、响应式
- 整体布局：Flexbox/Grid 居中布局
- 响应式设计：适配移动端

### 4. 实现 js/main.js
- 初始化 NProgress 配置
- 页面加载完成后结束进度条
- 可添加平滑滚动等增强效果

### 5. 集成 NProgress
- 使用 CDN 或本地引入 NProgress
- 配置进度条颜色、速度等参数
- 在 DOMContentLoaded 事件中控制进度条

### 6. 优化和测试
- 确保所有链接正确
- 测试响应式布局
- 验证下载按钮指向 release/latest.exe
- 检查 NProgress 效果

## 注意事项
- 截图使用占位图，用户需自行替换实际截图
- release/latest.exe 需用户自行放置
- 可选使用 CDN 引入 NProgress 以减少文件体积
