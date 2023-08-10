function debounce(func, wait) {
  //防抖
  let timer
  // 在后续触发事件时，是直接触发的回调函数，不会去重新定义 timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}

function throttle(func, wait) {
  //节流
  let timer = null
  return function () {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        timer = null
      }, wait)
    }
  }
}

export { debounce, throttle }
