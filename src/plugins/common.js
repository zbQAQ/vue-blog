/**
 * @param { Date } now 需要格式化的时间点
 * @param { String } fmt 格式
 * @return { String }
 */
export const dateFormat = (now, fmt) => {
  var f = fmt || "yyyy-MM-dd HH:mm:ss";
  var o = {
    "q+": Math.floor((now.getMonth() + 3) / 3), //季度
    "M+": now.getMonth() + 1, //月份
    "d+": now.getDate(), //日
    "H+": now.getHours(), //时
    "m+": now.getMinutes(), //分
    "s+": now.getSeconds(), //秒
    S: now.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(f)) {
    f = f.replace(
      RegExp.$1,
      (now.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(f)) {
      f = f.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return f;
};

/**
 * @param { Function } fn 防抖要执行的函数
 * @param { delay } delay 延时
 * @return { * }
 */
export const debounce = (fn, delay) => {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
};

/**
 * @param { Element } el 过度图片的元素
 * @param { String } url 目标图片的地址
 */
export const loadBanner = (el, url) => {
  // console.log(el, url);
  const oldImage = window.getComputedStyle(el).backgroundImage.slice(5, -2);
  el.style.opacity = 0;

  let image = new Image();
  image.onload = () => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.backgroundImage = "url(" + url + ")";
    }, 1000);
  };
  image.onerror = function() {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.backgroundImage = oldImage;
    }, 1000);
  };
  image.src = url;
};