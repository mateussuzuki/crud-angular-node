const PROXY_CONFIG = [
  {
    context: [
      "/users",
      "/colors",
      "/brands",
      "/cars",
    ],
    target: "http://localhost:3000/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG