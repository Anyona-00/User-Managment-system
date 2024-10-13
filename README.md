Adamur Entry Test - User Management System
This project is a user management system built as part of the Adamur Entry Test. It provides user registration, secure login, email-based account verification using OTP, and password reset functionality. The system is designed to be scalable, secure, and adaptable, suitable for integration into educational platforms like Adamur.

src/
├── pages/                   # React components for different pages of the application
│   ├── LoginPage.jsx        # Component for user login
│   ├── SignUpPage.jsx       # Component for user sign up
│   ├── OtpVerificationPage.jsx  # Component for OTP verification
│   ├── ForgotPasswordPage.jsx   # Component for initiating password reset
│   ├── PasswordResetPage.jsx    # Component for resetting the password
│   └── WelcomePage.jsx      # Component for welcome message after login/registration
│
├── App.js                   # Main React app component
├── __tests__/               # Unit tests for major components
│   ├── LoginPage.test.js
│   ├── SignUpPage.test.js
│   ├── OtpVerificationPage.test.js
│   ├── ForgotPasswordPage.test.js
│   ├── PasswordResetPage.test.js
│   └── WelcomePage.test.js
│
└── index.js                 # Entry point for the React app


Setup Instructions
Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher) or yarn
1. Clone the Repository

git clone https://github.com/your-repo/adumur-user-management.git
cd adumur-user-management

