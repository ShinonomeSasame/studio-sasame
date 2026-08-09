# CLAUDE.md

このファイルはClaude Codeがこのリポジトリで作業する際の規約集。作業前に必ず参照すること。

## プロジェクト概要

- 言語: JavaScript
- ライブラリ: Phaser（バージョンは `package.json` を参照）
- 個人開発のブラウザゲームプロジェクト
- タスク管理: GitHub Issues / Projects（本リポジトリ内のdocsではタスク一覧を管理しない）

## ディレクトリ構成

```
src/     … Phaserソースコード（scenes/, entities/, systems/, ui/ 等）
assets/  … 画像・音声・フォント・タイルマップ等の素材
docs/    … 開発工程に対応した番号付きドキュメント（Obsidian Vaultとして開く前提）
```

## docs/ の運用ルール（重要）

`docs/` は開発工程の粒度で4つに分けている。**ドキュメントを書く/参照するときは必ずこの番号体系に従うこと。**

| フォルダ | 内容 | 書くタイミング |
|---|---|---|
| `docs/01_planning/` | GDD（ゲームデザインドキュメント）、企画・仕様 | 企画時、仕様変更時 |
| `docs/02_design/` | 技術設計、アーキテクチャ、ADR（設計判断記録） | 実装前の設計検討時 |
| `docs/03_devlog/` | 実装ログ、詰まりポイント、QAメモ | 実装作業中・完了時 |
| `docs/04_ops/` | リリースノート、振り返り | リリース時、マイルストーン節目 |

- `docs/_templates/` に各種テンプレートがあるので、新規ノートを作る際はそれをコピーして使うこと
- タスクの分解・進捗管理はGitHub Issues/Projectsが唯一の情報源。`docs/`側にタスク一覧を重複して作らない
- `docs/03_devlog/` のファイル名は `YYYY-MM-DD_内容.md` の形式にする（例: `2026-08-09_player-movement.md`）
- 実装作業（Issue対応）を完了したら、`docs/03_devlog/` に何をやったか・詰まった点を簡潔に記録する
- GitHub IssueやPRの本文からdocs内のファイルへは相対パスでリンクできる（例: `docs/02_design/architecture-overview.md`）

## コーディング規約（プロジェクト固有ルールをここに追記していく）

- TODO: Phaserのバージョンとscene構成の方針
- TODO: 命名規則（ファイル名・クラス名・シーン名）
- TODO: Lintルール（ESLint設定を導入したらここに記載）
- TODO: アセットの配置・命名ルール（画像/音声/tilemapの置き場）

## ワークフロー

1. GitHub Issueを起点に `feature/*` ブランチで実装する
2. 実装が一段落したら `docs/03_devlog/` に記録を残す
3. PRを作成したら `/code-review` でセルフレビューしてからmergeする
4. リリース・マイルストーン節目には `docs/04_ops/` にリリースノートまたは振り返りを書く

## AIへの指示方針

- 仕様や設計判断で不明点があれば、まず `docs/01_planning/` と `docs/02_design/` を確認すること
- 新しい設計判断をした場合は `docs/_templates/adr.md` を元に `docs/02_design/` にADRを作成すること
- 実装が完了した際は、devlogへの追記を提案すること（自動で書きすぎず、内容を確認してから記録する）
