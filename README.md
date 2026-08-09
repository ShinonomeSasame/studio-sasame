# sandbox-project

(1〜2行でどんなゲームか。テンプレートの間はプレースホルダのままでOK)

## 技術構成

- JavaScript / [Phaser](https://phaser.io/)
- ビルド: Vite
- ドキュメント: `docs/`（Obsidian Vaultとして開く）
- タスク管理: GitHub Issues / Projects

## セットアップ

```bash
npm install
npm run dev       # 開発サーバ起動
```

## ビルド・公開

```bash
npm run build      # dist/ に静的ファイルを出力
```

`dist/` の中身をレンタルサーバにそのままアップロードする。

## ディレクトリ構成

```
src/     … Phaserソースコード
assets/  … 画像・音声・フォント等の素材
docs/    … 開発ドキュメント（Obsidian Vault）
```

詳しい規約・ワークフローは [`CLAUDE.md`](./CLAUDE.md) を参照。

## ドキュメント

`docs/` フォルダをObsidianでVaultとして開く。運用ルールは [`docs/README.md`](./docs/README.md) 参照。
