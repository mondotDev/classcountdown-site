const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {Resend} = require("resend");

admin.initializeApp();

const resend = new Resend(functions.config().resend.key);

exports.sendContactEmail = functions.firestore
    .document("messages/{messageId}")
    .onCreate(async (snap, context) => {
      console.log("📩 sendContactEmail triggered");
      const data = snap.data();

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        console.warn("Missing required fields:", data);
        return null;
      }

      try {
        const response = await resend.emails.send({
          from: "info@classcountdown.app",
          to: ["info@classcountdown.app"],
          subject: `New message from ${data.name}`,
          html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong><br>${data.message}</p>
        `,
        });

        console.log("Email sent:", response);
      } catch (error) {
        console.error("Error sending email via Resend:", error);
      }

      return null;
    });
