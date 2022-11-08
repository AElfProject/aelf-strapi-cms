module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  proxy: false,
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});