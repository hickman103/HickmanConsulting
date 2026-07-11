const form = document.getElementById("inquiry-form");
const statusText = document.getElementById("form-status");
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwiGRcC0j0RY_A8VoPdFKPvWFsbETTijCZAuTnX1vUW-uCaFcVUhYEVVnLm6StOS4Ev/exec";
const THANK_YOU_URL = "thank-you.html";

if (form && statusText) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams({
      name: formData.get("name")?.toString().trim() || "",
      organization: formData.get("organization")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      role: formData.get("role")?.toString().trim() || "",
      interest: formData.get("interest")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
      pageUri: window.location.href,
      pageName: document.title,
    });

    statusText.textContent = "Sending inquiry...";

    try {
      if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
        throw new Error("Missing Google Apps Script URL");
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      window.location.href = THANK_YOU_URL;
    } catch (error) {
      statusText.textContent =
        "Something went wrong while sending the inquiry. Please email hunter.hickman@hickmanconsultingai.com directly.";
    }
  });
}

// Newsletter signup. NEWSLETTER_FORM_ACTION must be set to the email
// provider's form endpoint (e.g. Kit/ConvertKit form action URL) before
// the form can subscribe anyone; until then submissions fall back to the
// Skool community link below.
const NEWSLETTER_FORM_ACTION = "";
const SKOOL_URL = "https://www.skool.com/ai-for-educators-3099";

const newsletterForm = document.getElementById("newsletter-form");
const newsletterStatus = document.getElementById("newsletter-status");

if (newsletterForm && newsletterStatus) {
  newsletterForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = new FormData(newsletterForm).get("email")?.toString().trim() || "";

    if (!NEWSLETTER_FORM_ACTION) {
      newsletterStatus.innerHTML =
        'Email signup opens very soon — in the meantime, everything lives in the free ' +
        '<a href="' + SKOOL_URL + '" target="_blank" rel="noreferrer">AI for Educators community</a>.';
      return;
    }

    newsletterStatus.textContent = "Signing you up...";

    try {
      await fetch(NEWSLETTER_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({ email }),
      });
      newsletterForm.reset();
      newsletterStatus.textContent =
        "You're in! Check your inbox for a welcome email.";
    } catch (error) {
      newsletterStatus.textContent =
        "Something went wrong. Please email hunter.hickman@hickmanconsultingai.com directly.";
    }
  });
}

const modelRoot = document.getElementById("solution-model");

if (modelRoot) {
  const modelItems = Array.from(modelRoot.querySelectorAll(".model-item"));

  modelItems.forEach((item) => {
    const button = item.querySelector(".model-node");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("is-active");

      modelItems.forEach((entry) => {
        entry.classList.remove("is-active");
        entry.querySelector(".model-node").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("is-active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
