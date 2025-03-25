import { render } from "@testing-library/react";
import { SignIn } from "./sign-in";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { HelmetProvider } from "react-helmet-async";
// testando components de Links

describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={["/sign-in?email=jhondoe@example.com"]}
            >
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu email") as HTMLInputElement;

    expect(emailInput.value).toEqual("jhondoe@example.com");
  });
});
