/**
 * CONTACTページのフォーム送信処理。
 * EmailJS(CDN配布scriptタグ経由でグローバルに公開される`emailjs`オブジェクト)を利用して
 * フォーム入力内容をメール送信する。
 * 送信成功/失敗はフォーム下の結果メッセージ要素(#contact-form-result)で通知する。
 */

// TODO: 実際のEmailJSアカウント作成後に差し替える
const EMAILJS_SERVICE_ID = "PLACEHOLDER_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "PLACEHOLDER_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "PLACEHOLDER_PUBLIC_KEY";

function initContactForm() {
  const form = document.getElementById("contact-form");
  const resultEl = document.getElementById("contact-form-result");

  if (!form || !resultEl) {
    return;
  }

  // CDN scriptタグ(email.min.js)が読み込まれると、windowに`emailjs`が公開される。
  const emailjs = window.emailjs;

  if (emailjs && typeof emailjs.init === "function") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const showResult = (message, status) => {
    resultEl.textContent = message;
    resultEl.classList.remove(
      "contact-form__result--success",
      "contact-form__result--error",
      "contact-form__result--pending",
    );
    resultEl.classList.add(`contact-form__result--${status}`);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!emailjs) {
      showResult(
        "送信処理を初期化できませんでした。時間をおいて再度お試しください。",
        "error",
      );
      return;
    }

    const submitButton = form.querySelector(".contact-form__submit");
    if (submitButton) {
      submitButton.disabled = true;
    }
    showResult("送信中です…", "pending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        showResult("お問い合わせを送信しました。ご連絡ありがとうございます。", "success");
        form.reset();
      })
      .catch(() => {
        showResult(
          "送信に失敗しました。時間をおいて再度お試しいただくか、SNSからご連絡ください。",
          "error",
        );
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
  });
}

initContactForm();
