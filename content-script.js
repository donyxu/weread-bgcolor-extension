let style = document.createElement('style');
style.setAttribute('type', 'text/css');

let cssText = document.createTextNode('');

style.appendChild(cssText);
document.head.appendChild(style);

let setColor = (color) => cssText.textContent = `
  .wr_whiteTheme .readerContent .app_content,
  .wr_whiteTheme .readerTopBar {
    background-color: ${color};
  }
  .wr_whiteTheme .bookInfo_intro.hasMore:after,
  .wr_whiteTheme .bookReviewList_item .content_Normal.hasMore:after,
  .wr_whiteTheme .reader_topReview_item .content_Normal.hasMore:after {
    background-image: linear-gradient(90deg,hsla(0,0%,100%,0),${color} 50%,${color})
  }`;

chrome.storage.local.get('color', ({ color }) => color && setColor(color));
chrome.storage.onChanged.addListener(({ color }) => color && setColor(color.newValue));