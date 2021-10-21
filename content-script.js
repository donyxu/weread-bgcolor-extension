let style = document.createElement('style');
style.setAttribute('type', 'text/css');

let cssText = document.createTextNode('');

style.appendChild(cssText);
document.head.appendChild(style);

let setColor = (color) => cssText.textContent = `
  .wr_whiteTheme .readerContent .app_content,
  .wr_whiteTheme .readerTopBar {
    background-color: ${color};
  }`;

chrome.storage.local.get('color', ({ color }) => color && setColor(color));
chrome.storage.onChanged.addListener(({ color }) => color && setColor(color.newValue));