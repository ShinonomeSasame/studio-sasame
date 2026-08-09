# docs/ 運用ルール

このディレクトリはObsidian Vaultとしてそのまま開く前提のドキュメント置き場。開発工程の粒度で番号を振っている。

## フォルダ構成

| フォルダ | 内容 | 対応する開発工程 |
|---|---|---|
| `_templates/` | 各種ノートの雛形 | - |
| `01_planning/` | GDD、企画・仕様 | 企画・仕様策定 |
| `02_design/` | 技術設計、アーキテクチャ、ADR | 設計 |
| `03_devlog/` | 実装ログ、詰まりポイント、QAメモ | 実装・セルフレビュー |
| `04_ops/` | リリースノート、振り返り | リリース・運用 |

## 各フォルダの主なファイル

| フォルダ | ファイル | 役割 |
|---|---|---|
| `01_planning/` | `GDD.md` | メインの企画書 |
| `01_planning/` | `scope.md` | 現マイルストーンの作る/作らない範囲 |
| `02_design/` | `architecture-overview.md` | 現在のアーキテクチャ全体像（常に最新化） |
| `02_design/adr/` | `ADR-0001-xxx.md`... | 個別の設計判断の履歴（連番） |
| `03_devlog/` | `YYYY-MM-DD_内容.md` | 作業ごとの実装ログ |
| `03_devlog/` | `gotchas.md` | このゲーム固有のハマりどころの蓄積メモ |
| `04_ops/` | `release_vX.Y.Z.md` | リリースごとに作成 |
| `04_ops/` | `retro_YYYY-Www.md` | 振り返りごとに作成 |

## 運用ルール

- タスクの分解・進捗管理は行わない。GitHub Issues / Projectsが唯一の情報源
- 新規ノートは `_templates/` の雛形をコピーして作成する
- `03_devlog/` のファイル名は `YYYY-MM-DD_内容.md` 形式
- `04_ops/` はリリースノートと振り返りをファイル名で区別する（例: `release_v0.1.0.md` / `retro_2026-w32.md`）
- GitHub IssueやPRからは `docs/xx_folder/file.md` の相対パスでリンクできる

## Obsidian設定メモ

- Vaultはこの `docs/` フォルダを直接開く
- Gitルートはプロジェクトルート（`docs/`の一つ上）なので、Obsidian Gitプラグインを使う場合はVaultパスの扱いを設定で確認すること
- `.obsidian/workspace*` など個人環境依存のファイルは `.gitignore` に追加すること
