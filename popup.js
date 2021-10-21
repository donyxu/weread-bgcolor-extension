for (let div of document.getElementsByClassName('color')) {
  let r = div.getAttribute('r');
  let g = div.getAttribute('g');
  let b = div.getAttribute('b');
  let color = `rgb(${r}, ${g}, ${b})`;
  div.style.backgroundColor = color;
  div.onclick = () => chrome.storage.local.set({ color }, window.close);
}