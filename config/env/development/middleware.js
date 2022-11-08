// This is just an example, and is not required
module.exports = ({ env }) => ({
  session: {
    enabled: true,
    client: "cookie",
    key: "strapi.sid",
    prefix: "strapi:sess:",
    secretKeys: ["mySecretKey1", "mySecretKey2"],
    httpOnly: true,
    maxAge: 86400000,
    overwrite: true,
    signed: false,
    rolling: false
  },
  logger: {
    level: "debug",
    exposeInContext: true,
    requests: true
  },
  parser: {
    enabled: true,
    multipart: true
  },
  gzip: {
    enabled: false
  },
  responseTime: {
    enabled: false
  },
  poweredBy: {
    enabled: true,
    value: "Strapi <strapi.io>"
  },
  csp: {
    enabled: true,
    policy: ["block-all-mixed-content"]
  },
  p3p: {
    enabled: false,
    value: ""
  },
  hsts: {
    enabled: true,
    maxAge: 31536000,
    includeSubDomains: true
  },
  xframe: {
    enabled: true,
    value: "SAMEORIGIN"
  },
  xss: {
    enabled: true,
    mode: "block"
  },
  cors: {
    enabled: true
  },
  ip: {
    enabled: false,
    whiteList: [],
    blackList: []
  },
  host: env("HOST", "0.0.0.0"),
  port: env("PORT", 1337),
  proxy: false,
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});
