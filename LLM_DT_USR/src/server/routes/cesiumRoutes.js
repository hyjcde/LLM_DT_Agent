const express = require("express");
const router = express.Router();
const CesiumController = require("../controllers/cesiumController");

// 处理Cesium Story控制命令
router.post("/command", CesiumController.handleCommand);

module.exports = router;
