
/*
 * 作者：sunzhonghui
 * 版本号：1.0.0
 * 日期：2025-01-22
 * 功能：自定义水印
 */


(function () {
    // 从 cookies 获取水印数据
    function getCookieValue(cookieName) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(`${cookieName}=`)) {
                return decodeURIComponent(cookie.substring(cookieName.length + 1));
            }
        }
        return null;
    }

    // 从 localStorage 获取水印数据
    function getLocalStorageValue(key) {
        return localStorage.getItem(key) || null;
    }

    // 获取水印数据，如果有的话
    function getParameter(key) {
        return getLocalStorageValue(key) || getCookieValue(key);
    }

    // 获取当前日期
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 创建水印
    function setBackground(options = {}) {
        const {
            fontSize = 11,
            color = 'darkgray',
            opacity = 0.5,
            rotate = -45,
            spacingX = 200,
            spacingY = 100
        } = options;

        // 获取水印内容
        const watermarkCon = getParameter('watermarkCon') || 'default_' + getCurrentDate();
        const watermarkDate = getParameter('watermarkDate') || getCurrentDate();

        // 定义SVG格式
        const svgstring = `
       <svg id="diagtext" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
            <style type="text/css">
                text {
                    fill: ${color};
                    font-family: Avenir, Arial, Helvetica, sans-serif;
                }
            </style>
            <defs>
                <pattern id="watermarkCon" patternUnits="userSpaceOnUse" width="${spacingX}" height="${spacingY}">
                    <text y="20" font-size="${fontSize}" id="name">${watermarkCon}</text>
                </pattern>
                <pattern xlink:href="#watermarkCon">
                    <text y="60" x="100" font-size="${fontSize-4}" id="watermarkDate">${watermarkDate}</text>
                </pattern>
                <pattern id="combo" xlink:href="#watermarkCon" patternTransform="rotate(${rotate})">
                    <use xlink:href="#name" />
                    <use xlink:href="#watermarkDate" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#combo)" />
        </svg>`;

        // 创建水印容器
        const watermarkDiv = document.createElement('div');
        watermarkDiv.style.position = 'fixed';
        watermarkDiv.style.zIndex = '9999';
        watermarkDiv.style.pointerEvents = 'none';
        watermarkDiv.style.top = '0';
        watermarkDiv.style.left = '0';
        watermarkDiv.style.width = '100vw';
        watermarkDiv.style.height = '100vh';
        watermarkDiv.style.backgroundImage = `url('data:image/svg+xml;base64,${window.btoa(svgstring)}')`;
        watermarkDiv.style.opacity = `${opacity}`;
        watermarkDiv.style.pointerEvents = 'none';
        document.body.appendChild(watermarkDiv);
    }

    // 等待页面加载后执行
    window.addEventListener('load', function () {
        // 自定义样式配置
        const customOptions = {
            fontSize: 14,  // 字体大小
            color: 'rgba(100, 100, 100, 0.7)',  // 水印颜色
            opacity: 0.5,  // 透明度
            rotate: -45,  // 旋转角度
            spacingX: 200,  // X轴间距
            spacingY: 100   // Y轴间距
        };
        setBackground(customOptions);
    });
})();
