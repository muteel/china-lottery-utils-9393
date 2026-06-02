/**
 * 竞彩网China Lottery - 入口文件
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  version: '1.0.0',
  outputDir: './output',
  debug: process.env.DEBUG === 'true',
};

function init() {
  console.log(`[INFO] 启动 v${CONFIG.version}`);
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    console.log(`[INFO] 创建目录: ${CONFIG.outputDir}`);
  }
}

function processData(data) {
  if (!data) {
    throw new Error('数据不能为空');
  }
  return {
    ...data,
    processedAt: new Date().toISOString(),
    status: 'completed',
  };
}

try {
  init();
  const result = processData({ name: 'test' });
  console.log('[INFO] 处理完成:', JSON.stringify(result));
} catch (err) {
  console.error('[ERROR]', err.message);
  process.exit(1);
}
