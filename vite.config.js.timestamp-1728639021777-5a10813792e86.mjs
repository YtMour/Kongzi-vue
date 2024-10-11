// vite.config.js
import { fileURLToPath, URL } from "node:url";
import postcsspxtorem from "file:///D:/GitHub/Kongzi-vue/node_modules/postcss-pxtorem/index.js";
import { defineConfig } from "file:///D:/GitHub/Kongzi-vue/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/GitHub/Kongzi-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/GitHub/Kongzi-vue/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 100,
          unitPrecision: 3,
          propList: ["*"],
          selectorBlackList: ["ignore"],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: "./",
  // 添加此行
  assetsDir: "static",
  // 添加此行
  parallel: false,
  // 添加此行
  // 添加以下跨域配置
  server: {
    cors: true
    // 允许跨域
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS29uZ3ppLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXEtvbmd6aS12dWVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdEh1Yi9Lb25nemktdnVlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcG9zdGNzc3B4dG9yZW0gZnJvbSAncG9zdGNzcy1weHRvcmVtJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSgpXSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIHBvc3Rjc3NweHRvcmVtKHtcclxuICAgICAgICAgIHJvb3RWYWx1ZTogMTAwLFxyXG4gICAgICAgICAgdW5pdFByZWNpc2lvbjogMyxcclxuICAgICAgICAgIHByb3BMaXN0OiBbJyonXSxcclxuICAgICAgICAgIHNlbGVjdG9yQmxhY2tMaXN0OiBbJ2lnbm9yZSddLFxyXG4gICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgIG1lZGlhUXVlcnk6IGZhbHNlLFxyXG4gICAgICAgICAgbWluUGl4ZWxWYWx1ZTogMCxcclxuICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvaSxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYXNlOiAnLi8nLCAvLyBcdTZERkJcdTUyQTBcdTZCNjRcdTg4NENcclxuICBhc3NldHNEaXI6ICdzdGF0aWMnLCAvLyBcdTZERkJcdTUyQTBcdTZCNjRcdTg4NENcclxuICBwYXJhbGxlbDogZmFsc2UsIC8vIFx1NkRGQlx1NTJBMFx1NkI2NFx1ODg0Q1xyXG5cclxuICAvLyBcdTZERkJcdTUyQTBcdTRFRTVcdTRFMEJcdThERThcdTU3REZcdTkxNERcdTdGNkVcclxuICBzZXJ2ZXI6IHtcclxuICAgIGNvcnM6IHRydWUsICAvLyBcdTUxNDFcdThCQjhcdThERThcdTU3REZcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxTQUFTLGVBQWUsV0FBVztBQUN2UixPQUFPLG9CQUFvQjtBQUMzQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFIcUksSUFBTSwyQ0FBMkM7QUFNdE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsZUFBZTtBQUFBLFVBQ2IsV0FBVztBQUFBLFVBQ1gsZUFBZTtBQUFBLFVBQ2YsVUFBVSxDQUFDLEdBQUc7QUFBQSxVQUNkLG1CQUFtQixDQUFDLFFBQVE7QUFBQSxVQUM1QixTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixlQUFlO0FBQUEsVUFDZixTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBO0FBQUEsRUFDTixXQUFXO0FBQUE7QUFBQSxFQUNYLFVBQVU7QUFBQTtBQUFBO0FBQUEsRUFHVixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
