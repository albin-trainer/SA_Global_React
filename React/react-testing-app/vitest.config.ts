
import { defineConfig } from "vitest/config"; 

export default defineConfig({
  test: {
    environment: "jsdom",   // 
    globals: true,          // so no need to import test, expect
    setupFiles: "./src/test/setup.ts",
    testTimeout:100000
  },
});