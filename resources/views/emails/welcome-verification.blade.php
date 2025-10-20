<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to EduPortal</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .logo {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
        }
        .logo svg {
            width: 40px;
            height: 40px;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-message {
            text-align: center;
            margin-bottom: 30px;
        }
        .welcome-message h2 {
            color: #1e40af;
            font-size: 28px;
            margin: 0 0 10px;
            font-weight: 600;
        }
        .welcome-message p {
            color: #6b7280;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
        }
        .user-details {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            border-left: 5px solid #3b82f6;
        }
        .user-details h3 {
            color: #1f2937;
            font-size: 18px;
            margin: 0 0 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .user-details h3::before {
            content: "👤";
            margin-right: 10px;
            font-size: 20px;
        }
        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #d1d5db;
        }
        .detail-item:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: 600;
            color: #374151;
        }
        .detail-value {
            color: #6b7280;
            font-weight: 500;
        }
        .role-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .role-admin { background: #fee2e2; color: #dc2626; }
        .role-teacher { background: #fef3c7; color: #d97706; }
        .role-student { background: #dbeafe; color: #2563eb; }
        .role-hr { background: #ecfdf5; color: #16a34a; }
        .role-moderator { background: #f3e8ff; color: #9333ea; }
        .role-registrar { background: #f0fdf4; color: #15803d; }
        
        .instructions {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            border-left: 5px solid #3b82f6;
        }
        .instructions h3 {
            color: #1e40af;
            font-size: 18px;
            margin: 0 0 15px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .instructions h3::before {
            content: "🔐";
            margin-right: 10px;
            font-size: 20px;
        }
        .instructions p {
            color: #3730a3;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
        .cta-button {
            display: block;
            width: fit-content;
            margin: 30px auto;
            padding: 14px 28px;
            background: #ffffff;
            color: #3b82f6;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            transition: all 0.2s ease;
            border: 2px solid #3b82f6;
        }
        .cta-button:hover {
            background: #3b82f6;
            color: white;
            transform: translateY(-1px);
        }
        .alternative-link {
            background: #f9fafb;
            border-radius: 12px;
            padding: 20px;
            margin: 30px 0;
            border: 1px solid #e5e7eb;
        }
        .alternative-link p {
            color: #6b7280;
            font-size: 14px;
            margin: 0 0 10px;
        }
        .alternative-link code {
            background: #f3f4f6;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 12px;
            color: #374151;
            word-break: break-all;
        }
        .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            color: #6b7280;
            font-size: 14px;
            margin: 0;
            line-height: 1.6;
        }
        .footer .signature {
            color: #3b82f6;
            font-weight: 600;
            margin-top: 10px;
        }
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .header h1 {
                font-size: 24px;
            }
            .welcome-message h2 {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <h1>EduPortal</h1>
            <p>School Management System</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Welcome Message -->
            <div class="welcome-message">
                <h2>Welcome to EduPortal, {{ explode(' ', $user->name)[0] }}!</h2>
                <p>Your account has been successfully created. Please verify your email address to complete your registration and access your dashboard.</p>
            </div>

            <!-- User Details -->
            <div class="user-details">
                <h3>Your Account Details</h3>
                <div class="detail-item">
                    <span class="detail-label">Full Name:</span>
                    <span class="detail-value">{{ $user->name }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Email Address:</span>
                    <span class="detail-value">{{ $user->email }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Role:</span>
                    <span class="detail-value">
                        <span class="role-badge role-{{ $user->role }}">{{ ucfirst($user->role) }}</span>
                    </span>
                </div>
                @if($user->school_id)
                <div class="detail-item">
                    <span class="detail-label">Student/Staff ID:</span>
                    <span class="detail-value">{{ $user->school_id }}</span>
                </div>
                @endif
                @if($user->grade)
                <div class="detail-item">
                    <span class="detail-label">Grade/Class:</span>
                    <span class="detail-value">{{ $user->grade }}</span>
                </div>
                @endif
                @if($user->phone)
                <div class="detail-item">
                    <span class="detail-label">Phone Number:</span>
                    <span class="detail-value">{{ $user->phone }}</span>
                </div>
                @endif
            </div>

            <!-- Instructions -->
            <div class="instructions">
                <h3>Next Steps</h3>
                <p><strong>Step 1:</strong> Click the verification button below to confirm your email address.</p>
                <p><strong>Step 2:</strong> After verification, you'll be redirected to change your password for security.</p>
                <p><strong>Step 3:</strong> Once completed, you'll have full access to your EduPortal dashboard!</p>
            </div>

            <!-- CTA Button -->
            <a href="{{ $verificationUrl }}" class="cta-button">
                Verify Email Address
            </a>

            <!-- Alternative Link -->
            <div class="alternative-link">
                <p><strong>Having trouble clicking the button?</strong> Copy and paste the URL below into your web browser:</p>
                <code>{{ $verificationUrl }}</code>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>If you did not create an account with EduPortal, no further action is required. This verification link will expire in 60 minutes for security purposes.</p>
            <p class="signature">
                Best regards,<br>
                <strong>EduPortal Support Team</strong><br>
                School Management System
            </p>
        </div>
    </div>
</body>
</html>