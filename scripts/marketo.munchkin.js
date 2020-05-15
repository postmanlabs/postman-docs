const marketo = () => {
  const munchkinId = process.env.MUNCHKIN_ID || '';

  if (typeof document === 'object' && munchkinId) {
    /* eslint-disable */
    var didInit = false;
    function initMunchkin() {
      if (didInit === false) {
        didInit = true;
        Munchkin.init(munchkinId);
      }
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//munchkin.marketo.net/munchkin.js';
    s.onreadystatechange = function() {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        initMunchkin();
      }
    };
    s.onload = initMunchkin;
    document.getElementsByTagName('head')[0].appendChild(s);
    /* eslint-enable */
  }
};

module.exports = marketo;
