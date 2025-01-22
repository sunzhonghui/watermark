# 水印脚本 watermark.js

该脚本动态生成一个网页水印覆盖层，支持自定义文本、样式和布局。可以从 `cookies` 或 `localStorage` 中获取水印数据。

## 功能特点

- 自动为网页添加水印。
- 从以下位置获取水印内容和日期：
  - Cookies
  - LocalStorage
- 全面支持水印样式自定义：
  - 字体大小
  - 颜色
  - 透明度
  - 旋转角度
  - 水印间距
- 水印固定位置、透明且不可点击。

## 工作原理

1. **获取水印数据**：从 `localStorage` 或 cookies 中获取水印内容和日期。
2. **生成 SVG 水印**：动态创建包含水印文本的 SVG 并将其应用为背景。
3. **添加水印覆盖层**：在文档的 `body` 中添加一个具有水印背景的 `div`。

## 使用方法

### 1. 引入脚本

将脚本引入项目，并确保在 DOM 加载完成后运行。

```html
<script src="path-to-watermark.js"></script>
```

### 2. 自定义配置（可选）

您可以通过修改 `customOptions` 对象来调整水印的外观：

```javascript
const customOptions = {
    fontSize: 14,  // 水印文本字体大小
    color: 'rgba(100, 100, 100, 0.7)',  // 水印文本颜色
    opacity: 0.5,  // 水印透明度
    rotate: -45,  // 水印文本旋转角度
    spacingX: 200,  // 水平方向水印间距
    spacingY: 100   // 垂直方向水印间距
};
```

### 3. 添加水印数据（可选）

您可以通过设置 `localStorage` 或 cookies 来自定义水印内容：

```javascript
// 使用 localStorage
localStorage.setItem('watermarkCon', '机密文件');
localStorage.setItem('watermarkDate', '2025-01-22');

// 使用 cookies
document.cookie = 'watermarkCon=机密文件';
document.cookie = 'watermarkDate=2025-01-22';
```

### 4. 默认行为

如果未设置数据，脚本会使用以下默认值：

- `watermarkCon`：`default_<当前日期>`
- `watermarkDate`：`<当前日期>`

## 默认配置

- 字体大小：11px
- 颜色：`darkgray`
- 透明度：0.5
- 旋转角度：-45°
- 间距：200px（水平），100px（垂直）

## 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>水印示例</title>
</head>
<body>
    <h1>带有水印的示例页面</h1>
    <script src="watermark.js"></script>
</body>
</html>
```

![example](https://github.com/sunzhonghui/watermark/blob/main/img/example01.png?raw=true)

## 浏览器兼容性

该脚本使用现代 JavaScript 特性，兼容主流浏览器的最新版本。
