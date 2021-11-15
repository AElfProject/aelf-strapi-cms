export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env("PORT", 1337),
  production: true,
  proxy: false,
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});
