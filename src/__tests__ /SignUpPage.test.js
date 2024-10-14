import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpPage from "./SignUpPage";

describe("SignUpPage", () => {
  test("renders sign up form", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

    // Check if form elements are present
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
  });

  test("shows error for mismatched passwords", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "password456" },
    });

    fireEvent.click(screen.getByText(/Sign Up/i));

    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  test("successful signup redirects to OTP verification page", () => {
    const mockNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

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

    expect(mockNavigate).toHaveBeenCalledWith("/otp-verification");
  });
});
