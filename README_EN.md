# Watermark Script

This script dynamically generates a watermark overlay on a web page. It supports customization of text, style, and placement, and retrieves watermark data from `cookies` or `localStorage`.

## Features

- Automatically applies a watermark on the page.
- Retrieves watermark text and date from:
  - Cookies
  - LocalStorage
- Fully customizable watermark style:
  - Font size
  - Color
  - Opacity
  - Rotation angle
  - Spacing between watermarks
- Ensures the watermark is fixed, transparent, and unclickable.

## How It Works

1. **Retrieve Watermark Data**: Fetches the watermark content and date from `localStorage` or cookies.
2. **Generate SVG Watermark**: Dynamically creates an SVG containing the watermark text and applies it as the background.
3. **Apply Watermark Overlay**: Appends a `div` with the watermark background to the body of the document.

## Usage

### 1. Include the Script

Add the script to your project, ensuring it runs after the DOM is fully loaded.

```html
<script src="path-to-watermark.js"></script>
```

### 2. Customize Options (Optional)

You can modify the default watermark appearance by customizing the `customOptions` object:

```javascript
const customOptions = {
    fontSize: 14,  // Font size of the watermark text
    color: 'rgba(100, 100, 100, 0.7)',  // Watermark text color
    opacity: 0.5,  // Opacity of the watermark overlay
    rotate: -45,  // Rotation angle of the watermark text
    spacingX: 200,  // Horizontal spacing between watermarks
    spacingY: 100   // Vertical spacing between watermarks
};
```

### 3. Add Watermark Data (Optional)

You can set `localStorage` or cookies with the keys `watermarkCon` and `watermarkDate` to control the watermark content:

```javascript
// Using localStorage
localStorage.setItem('watermarkCon', 'Confidential Document');
localStorage.setItem('watermarkDate', '2025-01-22');

// Using cookies
document.cookie = 'watermarkCon=Confidential Document';
document.cookie = 'watermarkDate=2025-01-22';
```

### 4. Watermark Appearance

The watermark is rendered when the page loads. If no data is provided, default values are used:

- `watermarkCon`: `default_<current_date>`
- `watermarkDate`: `<current_date>`

## Default Behavior

- Font size: 11px
- Color: `darkgray`
- Opacity: 0.5
- Rotation: -45 degrees
- Spacing: 200px (X), 100px (Y)

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watermark Example</title>
</head>
<body>
    <h1>Sample Page with Watermark</h1>
    <script src="watermark.js"></script>
</body>
</html>
```

## Browser Compatibility

The script uses modern JavaScript features and is compatible with the latest versions of major browsers.
