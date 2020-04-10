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

export const formatUTC = utc_datetime => {
  // 转为正常的时间格式 年-月-日 时:分:秒
  var T_pos = utc_datetime.indexOf("T");
  var Z_pos = utc_datetime.indexOf("Z");
  var year_month_day = utc_datetime.substr(0, T_pos);
  var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
  var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

  // 处理成为时间戳
  timestamp = new Date(Date.parse(new_datetime));
  timestamp = timestamp.getTime();
  timestamp = timestamp / 1000;

  // 增加8个小时，北京时间比utc时间多八个时区
  var timestamp = timestamp + 8 * 60 * 60;

  // 时间戳转为时间
  var beijing_datetime = new Date(parseInt(timestamp) * 1000)
    .toLocaleString()
    .replace(/年|月/g, "-")
    .replace(/日/g, " ");
  return beijing_datetime;
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
