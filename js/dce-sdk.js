window.addEventListener('message', onHandleSaveMessage, true);

function onHandleSaveMessage(evt) {
  console.log(`获取到来自 DCE ${evt.origin} 的数据`, evt.data);
}
