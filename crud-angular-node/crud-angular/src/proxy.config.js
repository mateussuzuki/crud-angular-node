const PROXY_CONFIG = [
  {
    context: [
      "/users",
      "/cars"
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