import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: '🎮 New Waitlist Signup - ArcadeOS',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                background-color: #1E1E1E;
                color: #FFFFFF;
                padding: 40px 20px;
                margin: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: linear-gradient(135deg, #2A2A2A 0%, #1E1E1E 100%);
                border: 2px solid #39FF14;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 0 40px rgba(57, 255, 20, 0.2);
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
              .logo {
                font-family: 'Rajdhani', sans-serif;
                font-size: 48px;
                font-weight: 800;
                letter-spacing: -1px;
              }
              .logo-arcade {
                background: linear-gradient(135deg, #39FF14 0%, #00FF7F 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              .title {
                font-size: 24px;
                font-weight: 700;
                color: #39FF14;
                margin: 20px 0 10px;
              }
              .email-box {
                background: #333333;
                border: 1px solid #39FF14;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
              }
              .email-text {
                font-size: 20px;
                font-weight: 600;
                color: #FFD700;
                margin: 0;
              }
              .info {
                color: #D3D3D3;
                line-height: 1.6;
                margin: 15px 0;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #333333;
                text-align: center;
                color: #999999;
                font-size: 14px;
              }
              .badge {
                display: inline-block;
                background: rgba(57, 255, 20, 0.2);
                border: 1px solid #39FF14;
                border-radius: 20px;
                padding: 6px 16px;
                font-size: 12px;
                font-weight: 600;
                color: #39FF14;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">
                  <span class="logo-arcade">Arcade</span><span style="color: #FFFFFF;">OS</span>
                </div>
                <div class="badge">New Waitlist Signup</div>
              </div>

              <h2 class="title">🎉 Someone just joined the waitlist!</h2>

              <div class="email-box">
                <p class="email-text">${email}</p>
              </div>

              <div class="info">
                <p><strong>What to do next:</strong></p>
                <ul style="padding-left: 20px;">
                  <li>Add this email to your mailing list</li>
                  <li>Send a welcome email</li>
                  <li>Keep them updated on launch progress</li>
                </ul>
              </div>

              <div class="footer">
                <p>ArcadeOS Waitlist Notification</p>
                <p style="color: #666666; font-size: 12px; margin-top: 10px;">
                  Sent via Resend • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
