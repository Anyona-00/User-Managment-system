import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OtpVerificationPage from "./OtpVerificationPage";

describe("OtpVerificationPage", () => {
  test("renders OTP input", () => {
    render(
      <BrowserRouter>
        <OtpVerificationPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Enter OTP/i)).toBeInTheDocument();
  });

  test("shows error for invalid OTP", () => {
    render(
      <BrowserRouter>
        <OtpVerificationPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Enter OTP/i), {
      target: { value: "12345" },
    });

    fireEvent.click(screen.getByText(/Verify OTP/i));

    expect(
      screen.getByText(/Please enter a valid 6-digit OTP/i)
    ).toBeInTheDocument();
  });

  test("successful OTP verification redirects to welcome page", () => {
    const mockNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <OtpVerificationPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Enter OTP/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/Verify OTP/i));

    expect(mockNavigate).toHaveBeenCalledWith("/welcome");
  });
});
