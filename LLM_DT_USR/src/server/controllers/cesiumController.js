const CesiumMessageHandler = {
  // 处理相机移动
  handleCameraMove: (data) => {
    return {
      type: "cameraMove",
      position: data.position,
      orientation: data.orientation,
    };
  },

  // 处理标记添加
  handleAddMarker: (data) => {
    return {
      type: "addMarker",
      position: data.position,
      description: data.description,
    };
  },

  // 处理缺陷高亮
  handleHighlightDefect: (data) => {
    return {
      type: "highlightDefect",
      defectId: data.defectId,
      color: data.color || "#FF0000",
    };
  },
};

class CesiumController {
  static async handleCommand(req, res) {
    try {
      const { command, data } = req.body;

      // 验证请求数据
      if (!command || !data) {
        return res.status(400).json({ error: "Invalid request format" });
      }

      // 根据命令类型处理请求
      let response;
      switch (command) {
        case "cameraMove":
          response = CesiumMessageHandler.handleCameraMove(data);
          break;
        case "addMarker":
          response = CesiumMessageHandler.handleAddMarker(data);
          break;
        case "highlightDefect":
          response = CesiumMessageHandler.handleHighlightDefect(data);
          break;
        default:
          return res.status(400).json({ error: "Unknown command" });
      }

      // 返回处理结果
      res.json({ success: true, data: response });
    } catch (error) {
      console.error("Error handling Cesium command:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = CesiumController;
