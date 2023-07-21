// vite.config.js

export default {
 // 他の設定項目...
  build: {
    // ビルドの出力先ディレクトリを指定します
    outDir: 'dist',
    // ソースマップを生成するために true に設定します
    sourcemap: true,
    // false に設定して出力ディレクトリをビルド時に空にしないようにします
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'your-library-name',
    },
    rollupOptions: {
      // .d.ts ファイルの出力先ディレクトリを指定します
      output: {
        dir: 'dist/types',
        entryFileNames: '[name].d.ts',
      },
    },
  },
};
