const form = document.getElementById("inquiry-form");
const note = document.getElementById("form-note");
const inquiryEmail = "hunter.hickman@hickmanconsultingai.com";

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const organization = formData.get("organization")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const role = formData.get("role")?.toString().trim() || "Not provided";
    const interest = formData.get("interest")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const subject = encodeURIComponent(
      `Website inquiry from ${name} at ${organization}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Role: ${role}`,
        `Interest: ${interest}`,
        "",
        "What they need support with:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${inquiryEmail}?subject=${subject}&body=${body}`;

    note.textContent =
      "Your email app should open with a pre-filled inquiry draft. Update the address in script.js if you want submissions sent somewhere else.";
    note.classList.add("is-success");
  });
}
