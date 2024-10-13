User Management System
This project is a user management system. It provides user registration, secure login, email-based account verification using OTP, and password reset functionality. The system is designed to be scalable, secure, and adaptable, suitable for integration into educational platforms like Adamur.

Project Structure Overview
graphql
Copy code
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
bash
Copy code
git clone https://github.com/your-repo/adumur-user-management.git
cd adumur-user-management
2. Install Dependencies
bash
Copy code
npm install
# or if using yarn
yarn install
3. Create Environment Variables
Create a .env file in the root directory and add the following variables (you may replace them with real values later):

bash
Copy code
REACT_APP_API_URL=your_backend_api_url
4. Start the Development Server
bash
Copy code
npm start
# or if using yarn
yarn start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

5. Build for Production
To create an optimized production build of the app:

bash
Copy code
npm run build
# or if using yarn
yarn build
This will bundle the application for deployment.

Testing Instructions
Unit tests are written using Jest and React Testing Library to ensure the correctness of components and key functionalities.

1. Running Unit Tests
To run the unit tests, execute the following command:

bash
Copy code
npm test
# or if using yarn
yarn test
The test runner will watch for changes and automatically re-run tests.

2. Running Tests Once
If you want to run the tests once and exit:

bash
Copy code
npm test -- --watchAll=false
# or if using yarn
yarn test --watchAll=false
3. Testing Coverage
To generate a code coverage report:

bash
Copy code
npm test -- --coverage
# or if using yarn
yarn test --coverage
This will generate a detailed report of the code coverage for your components, helping ensure the app's functionality is well-tested.

Key Features
User Registration: Allows users to sign up using their email and password.
Secure Login: Login functionality using secure password authentication.
OTP Verification: Users must verify their email via OTP before accessing the platform.
Password Reset: Allows users to reset their password if forgotten.
