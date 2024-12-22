import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { projectName, description, timeline, customTimeline, contact } =
      req.body;

    // Validate required fields
    if (
      !projectName ||
      !description ||
      !contact ||
      !(timeline || customTimeline)
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Format message for Telegram
    const message = `
🚀 New Project Request

📋 Project Name: ${projectName}

📝 Description:

"${description}"

⏰ Timeline: ${timeline === "custom" ? customTimeline : timeline}

📧 Contact: ${contact}
    `;

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHANNEL_ID,
          text: message,
          message_thread_id: process.env.TELEGRAM_THREAD_ID,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.description || "Failed to send message to Telegram",
      );
    }

    return res
      .status(200)
      .json({ message: "Project request sent successfully" });
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return res.status(500).json({ message: "Error sending project request" });
  }
}
