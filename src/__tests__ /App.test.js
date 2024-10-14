import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Integration Test", () => {
  test("full registration and login flow", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Navigate to Signup
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/Sign Up/i));

    // Navigate to OTP Verification
    expect(screen.getByText(/OTP Verification/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/Enter OTP/i), {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByText(/Verify OTP/i));

    // Check if user is taken to welcome page
    expect(screen.getByText(/Welcome, User!/i)).toBeInTheDocument();
  });
});
