const PROXY_CONFIG = [
  {
    context: [
      "/users",
      "/verify"
      // path
    ],
    target: "http://localhost:3000/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
      // permite acessar qualquer outros paths sem ser o "users" 
    }
  }
]

module.exports = PROXY_CONFIG