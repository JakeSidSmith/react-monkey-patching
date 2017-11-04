const MATCHES_TRUTHY_ENV_VARIABLE = /^true$/i;

function cssLivereload () {
  if (!document.getElementById('livereload')) {
    const script = document.createElement('script');
    script.id = 'livereload';
    script.type = 'text/javascript';
    script.src = 'http://localhost:35729/livereload.js?snipver=1';

    document.getElementsByTagName('head')[0].appendChild(script);
  }
}

const LIVERELOAD = process.env.LIVERELOAD; // eslint-disable-line no-undef

if (typeof LIVERELOAD === 'string' && MATCHES_TRUTHY_ENV_VARIABLE.test(LIVERELOAD)) {
  cssLivereload();
}
