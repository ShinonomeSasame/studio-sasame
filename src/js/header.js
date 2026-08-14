/**
 * 共通ヘッダーのハンバーガーメニュー開閉制御。
 * ハンバーガーボタン押下でナビゲーションを右端からスライドイン/アウトさせる。
 * 全ページの<head>またはbody末尾で `<script type="module" src="src/js/header.js"></script>` として読み込む。
 */

function initHamburgerMenu() {
  const button = document.getElementById("hamburger-btn");
  const nav = document.getElementById("site-nav");

  if (!button || !nav) {
    return;
  }

  const openMenu = () => {
    button.classList.add("is-open");
    nav.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "メニューを閉じる");
    nav.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    button.classList.remove("is-open");
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
    nav.setAttribute("aria-hidden", "true");
  };

  button.addEventListener("click", () => {
    if (button.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

initHamburgerMenu();
