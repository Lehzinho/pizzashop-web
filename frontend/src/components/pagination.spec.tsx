import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import { userEvent } from "@testing-library/user-event";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });
  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    );

    const currentPates = wrapper.getByText(/página 1 de 20/i);
    const totalItems = wrapper.getByText(/Total de 200/i);

    expect(currentPates).toBeInTheDocument();
    expect(totalItems).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: /Próxima página/i,
    });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the previous page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: /Página anterior/i,
    });

    console.log(onPageChangeCallback.mock.calls); // visualização da chamada da função

    const user = userEvent.setup();

    await user.click(nextPageButton);

    console.log(onPageChangeCallback.mock.calls);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the first page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: /Primera página/i,
    });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("should be able to navigate to the last page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: /Última página/i,
    });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
