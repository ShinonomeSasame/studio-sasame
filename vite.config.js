import { defineConfig } from 'vite';

export default defineConfig({
  // レンタルサーバのサブディレクトリに置いても動くよう相対パスでビルドする
  base: './',
  build: {
    outDir: 'dist',
  },
});
