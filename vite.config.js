// vite.config.js

export default {
  // 其他配置项...
  build: {
    // 指定构建输出目录
    outDir: 'dist',
    // 设置为 true，表示构建时生成类型声明文件
    sourcemap: true,
    // 设置为 false，避免在构建时输出冗余的类型声明文件
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'your-library-name',
    },
    rollupOptions: {
      // 指定输出 .d.ts 文件的目录
      output: {
        dir: 'dist/types',
        entryFileNames: '[name].d.ts',
      },
    },
  },
};
