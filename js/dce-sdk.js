window.addEventListener('message', onHandleSaveMessage, true);

function onHandleSaveMessage(evt) {
  console.log(`获取到来自 DCE ${evt.origin} 的数据`, evt.data);

  if (evt.data.action === 'START_VALIDATE') {
    window.parent.postMessage({
      action: "REQUEST_VALIDATE",
      result: {
        validateResult: true,
        data: []
      },
    }, evt.origin)
  }
}
