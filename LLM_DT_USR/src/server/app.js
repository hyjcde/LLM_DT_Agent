const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cesiumRoutes = require("./routes/cesiumRoutes");

const app = express();

// 中间件配置
app.use(
  cors({
    origin: "*", // 开发时可以允许所有来源
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// 基础错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// 添加路由
app.use("/api/cesium", cesiumRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
