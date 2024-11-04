const axios = require("axios");

// 测试相机移动命令
async function testCameraMove() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/cesium/command",
      {
        command: "cameraMove",
        data: {
          position: {
            longitude: 114.177216,
            latitude: 22.302711,
            height: 1500,
          },
          orientation: {
            heading: 0,
            pitch: -45,
            roll: 0,
          },
        },
      }
    );

    console.log("Camera move response:", response.data);
  } catch (error) {
    console.error(
      "Error testing camera move:",
      error.response?.data || error.message
    );
  }
}

// 测试添加标记命令
async function testAddMarker() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/cesium/command",
      {
        command: "addMarker",
        data: {
          position: {
            longitude: 114.177216,
            latitude: 22.302711,
            height: 100,
          },
          description: "测试标记点",
        },
      }
    );

    console.log("Add marker response:", response.data);
  } catch (error) {
    console.error(
      "Error testing add marker:",
      error.response?.data || error.message
    );
  }
}

// 执行测试
async function runTests() {
  console.log("Starting tests...");
  await testCameraMove();
  await testAddMarker();
  console.log("Tests completed.");
}

runTests();
