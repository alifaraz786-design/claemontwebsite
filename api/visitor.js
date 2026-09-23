export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { page, referrer, userAgent } = req.body || {};

    // Approximate location supplied by Vercel's network headers
    const country = req.headers["x-vercel-ip-country"] || "Unknown";
    const region = req.headers["x-vercel-ip-country-region"] || "Unknown";
    const cityRaw = req.headers["x-vercel-ip-city"] || "Unknown";

    let city = cityRaw;
    try {
      city = decodeURIComponent(cityRaw);
    } catch {}

    const visitTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "medium",
      timeStyle: "long",
    });

    const emailHtml = `
      <h2>New Claemont Ridge Law Website Visitor</h2>

      <p><strong>Time:</strong> ${escapeHtml(visitTime)}</p>
      <p><strong>Page:</strong> ${escapeHtml(page || "Unknown")}</p>
      <p><strong>Source / Referrer:</strong> ${escapeHtml(referrer || "Direct / Unknown")}</p>

      <hr>

      <p><strong>Country:</strong> ${escapeHtml(country)}</p>
      <p><strong>Region:</strong> ${escapeHtml(region)}</p>
      <p><strong>City:</strong> ${escapeHtml(city)}</p>

      <hr>

      <p><strong>Browser / Device:</strong><br>
      ${escapeHtml(userAgent || "Unknown")}</p>

      <p style="color:#777;font-size:12px;">
        Approximate analytics information only. This does not identify the visitor by name or email.
      </p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Claemont Ridge Website <notifications@claemontridgelaw.com>",
        to: ["claemontridgelaw@gmail.com"],
        subject: `New Website Visitor — ${city}, ${country}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Email could not be sent" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Visitor notification error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}