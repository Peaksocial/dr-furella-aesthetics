// Replaces Netlify Forms: the site's enquiry forms POST form-urlencoded data to
// /__forms.html. We forward it as JSON to the n8n webhook.
const WEBHOOK_URL =
  "https://n8n.creativepeaksocial.com/webhook/dr-furella-aesthetics-contact-form";

const FIELDS = [
  "formSource", "name", "email", "phone", "mobile", "clinic", "service",
  "timeframe", "timing", "patient", "source", "suburb", "concern",
  "safetyScreen", "message",
];

export async function onRequestPost({ request }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success to bots.
  if ((form.get("bot-field") || "").toString().trim() !== "") {
    return new Response("OK", { status: 200 });
  }

  const data = {};
  for (const field of FIELDS) {
    const value = form.get(field);
    if (value !== null) data[field] = value.toString();
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("Form forward failed:", err);
    return new Response("Could not send", { status: 502 });
  }

  return new Response("OK", { status: 200 });
}
