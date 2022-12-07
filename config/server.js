module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: env.int('PUBLIC_URL', 'http://yourbackend.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
