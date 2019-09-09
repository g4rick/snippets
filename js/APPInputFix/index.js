const fixInputScroll = () => {
  // https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800?page=1#comment-list
  if (isWechat() || isApp()) { // eslint-disable-line 判断是否是在 微信小程序或者在app中
    window.addEventListener('focusout', function() {
      //软键盘收起的事件处理

      setTimeout(() => {
        window.scrollTo(
          0,
          document.documentElement.scrollTop || document.body.scrollTop
        );
      });
    });
  }
};

export { expandArray, suffle, fixInputScroll };
