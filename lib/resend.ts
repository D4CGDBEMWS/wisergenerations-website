import { Resend } from 'resend'

const FROM = process.env.RESEND_FROM_EMAIL || 'crystal@wisergenerations.com'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function sendContactConfirmation(name: string, email: string) {
  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: 'We received your message — Wiser Generations',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#1B2A4A;padding:24px;border-radius:8px 8px 0 0">
          <h1 style="color:#C8962E;margin:0;font-size:20px">Enterprise Academy™</h1>
          <p style="color:#fff;margin:4px 0 0;font-size:14px">Wiser Generations · Life Is a Project™</p>
        </div>
        <div style="border:1px solid #e5e7eb;padding:32px;border-radius:0 0 8px 8px">
          <p style="font-size:16px">Hi ${name},</p>
          <p style="color:#374151">Thank you for reaching out. Crystal or a team member will respond within 2 business days.</p>
          <p style="color:#374151">In the meantime, explore the program at <a href="https://wisergenerations.com/program" style="color:#C8962E">wisergenerations.com/program</a>.</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
          <p style="color:#6b7280;font-size:13px;margin:0">— Crystal Stewart, The Project Management Evangelist™<br>Enterprise Academy™</p>
        </div>
      </div>
    `,
  })
}

export async function sendEnrollWelcome(firstName: string, email: string) {
  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: 'Your Project Has Been Received — Life Is a Project™',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#1B2A4A;padding:24px;border-radius:8px 8px 0 0">
          <h1 style="color:#C8962E;margin:0;font-size:20px">Enterprise Academy™</h1>
          <p style="color:#fff;margin:4px 0 0;font-size:14px">Wiser Generations · Life Is a Project™</p>
        </div>
        <div style="border:1px solid #e5e7eb;padding:32px;border-radius:0 0 8px 8px">
          <p style="font-size:16px">Hi ${firstName},</p>
          <p style="color:#374151">Your interest in <strong>Life Is a Project™</strong> has been noted.</p>
          <p style="color:#374151">We'll be in touch within 48 hours about enrollment options and next steps.</p>
          <div style="background:#FBF5E8;border-left:4px solid #C8962E;padding:16px;margin:24px 0;border-radius:0 4px 4px 0">
            <p style="margin:0;color:#1B2A4A;font-style:italic">"Your life is a project. You are the Project Manager. The only question is whether you'll manage it — or let it manage you."</p>
            <p style="margin:8px 0 0;color:#C8962E;font-size:13px">— Crystal Stewart</p>
          </div>
          <p><a href="https://wisergenerations.com/program" style="background:#C8962E;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">Explore the Program →</a></p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
          <p style="color:#6b7280;font-size:13px;margin:0">— Crystal Stewart, The Project Management Evangelist™<br>Enterprise Academy™ · wisergenerations.com</p>
        </div>
      </div>
    `,
  })
}

export async function sendEnrollmentConfirmation(
  name: string,
  email: string,
  productName: string
) {
  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `Enrollment Confirmed — ${productName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#1B2A4A;padding:24px;border-radius:8px 8px 0 0">
          <h1 style="color:#C8962E;margin:0;font-size:20px">Enterprise Academy™</h1>
          <p style="color:#fff;margin:4px 0 0;font-size:14px">Wiser Generations · Life Is a Project™</p>
        </div>
        <div style="border:1px solid #e5e7eb;padding:32px;border-radius:0 0 8px 8px">
          <div style="background:#E8F5EE;border:1px solid #1A6B3C;padding:16px;border-radius:6px;margin-bottom:24px">
            <p style="color:#1A6B3C;font-weight:bold;margin:0">✓ Enrollment Confirmed: ${productName}</p>
          </div>
          <p style="font-size:16px">Hi ${name},</p>
          <p style="color:#374151">Your enrollment in <strong>${productName}</strong> is confirmed. Your project starts now.</p>
          <h3 style="color:#1B2A4A">What Happens Next:</h3>
          <ol style="color:#374151;line-height:1.8">
            <li>You will receive an invitation to your Thinkific course portal within 24 hours.</li>
            <li>If your tier includes community access, watch for a separate Circle community invitation.</li>
            <li>Download your Student Workbook from the course portal once you receive access.</li>
          </ol>
          <p><a href="https://learn.wisergenerations.com" style="background:#C8962E;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">Access Your Course →</a></p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
          <p style="color:#6b7280;font-size:13px">Questions? Reply to this email or visit <a href="https://wisergenerations.com/contact" style="color:#C8962E">wisergenerations.com/contact</a></p>
          <p style="color:#6b7280;font-size:13px;margin:0">— Crystal Stewart, The Project Management Evangelist™<br>Enterprise Academy™</p>
        </div>
      </div>
    `,
  })
}
