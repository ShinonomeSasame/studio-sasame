import Phaser from 'phaser';

/**
 * 新しいシーンを作る際のコピー元テンプレート。
 *
 * 使い方:
 *   1. このファイルを `src/scenes/XxxScene.js` としてコピーする
 *   2. クラス名とコンストラクタに渡すキーを `XxxScene` にリネームする（ファイル名・クラス名・キーを揃える）
 *   3. `src/main.js` の `scene` 配列にインポートして追加する
 *
 * アセット命名規則: `シーン名_アセット名`（例: `templatescene_bg.png`）
 */
export default class TemplateScene extends Phaser.Scene {
  constructor() {
    super('TemplateScene');
  }

  preload() {
    // このシーンで使うアセットをここでロードする
    // 例: this.load.image('templatescene_bg', 'assets/images/templatescene_bg.png');
  }

  create() {
    this.add
      .text(this.scale.width / 2, this.scale.height / 2, 'TemplateScene', {
        fontFamily: 'sans-serif',
        fontSize: '32px',
        color: '#ffffff',
      })
      .setOrigin(0.5);
  }

  update(_time, _delta) {
    // 毎フレームの処理をここに書く
  }
}
