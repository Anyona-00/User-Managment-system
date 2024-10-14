import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  test("renders login form", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Check if email and password inputs are present
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test("shows error message for invalid email", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Fill in an invalid email
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "invalidemail" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Submit form
    fireEvent.click(screen.getByText(/Login/i));

    // Expect error message
    expect(
      screen.getByText(/Please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  test("successful login redirects to welcome page", () => {
    const mockNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(mockNavigate).toHaveBeenCalledWith("/welcome");
  });
});
