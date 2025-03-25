import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

// testando components de Links

describe("NavLink", () => {
  it("should highlight the nav link when is the current page", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,

      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
        ),
      }
    );

    const linkAbout = wrapper.getByText("About").dataset.current;
    const linkHome = wrapper.getByText("Home").dataset.current;

    expect(linkHome).toEqual("false");
    expect(linkAbout).toEqual("true");
  });
});
