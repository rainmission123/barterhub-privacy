const supportEmail = "barterhub.help@gmail.com";

const form = document.getElementById("deleteForm");
const statusText = document.getElementById("formStatus");
const supportEmailLink = document.getElementById("supportEmail");

supportEmailLink.href = `mailto:${supportEmail}`;
supportEmailLink.textContent = supportEmail;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const reason = document.getElementById("reason").value.trim();

  if (!email) {
    statusText.textContent = "Please enter your account email.";
    return;
  }

  const subject = "BarterHub Account Deletion Request";
  const bodyLines = [
    "Hello BarterHub Support,",
    "",
    reason || "Please delete my BarterHub account and personal data.",
    "",
    `Account email: ${email}`,
    `Username or display name: ${username || "Not provided"}`,
    "",
    "I understand that some records may be retained when required for safety,",
    "fraud prevention, payment disputes, legal obligations, or transaction",
    "history.",
  ];

  const mailtoUrl = new URL(`mailto:${supportEmail}`);
  mailtoUrl.searchParams.set("subject", subject);
  mailtoUrl.searchParams.set("body", bodyLines.join("\n"));

  window.location.href = mailtoUrl.toString();
  statusText.textContent = "Opening your email app...";
});
