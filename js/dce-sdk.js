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


function getDCEInfo() {
  const tenant = window.localStorage.getItem('DCE_TENANT');
  const cluster = window.localStorage.getItem('DCE_CLUSTER');
  const token = window.localStorage.getItem('DCE_TOKEN');
  console.log(`当前集群: ${cluster}，当前租户: ${tenant}，当前 Token: ${token}。`);
}

getDCEInfo();
