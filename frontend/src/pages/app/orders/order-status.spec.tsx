import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

interface element {
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  text: string;
  css: string;
}

describe("Order Status", () => {
  const elementArray = [
    { status: "canceled", text: "Cancelado", css: "bg-rose-500" },
    { status: "delivered", text: "Entregue", css: "bg-emerald-500" },
    { status: "delivering", text: "Em entrega", css: "bg-amber-500" },
    { status: "pending", text: "Pendente", css: "bg-slate-400" },
    { status: "processing", text: "Em preparo", css: "bg-amber-500" },
  ] as element[];

  test.each(elementArray)(
    "should display teh right text based on order status",
    ({ css, status, text }) => {
      const wrapper = render(<OrderStatus status={status} />);

      const statusText = wrapper.getByText(text);
      const badgeElement = wrapper.getByTestId("badge");

      expect(statusText).toBeInTheDocument();
      expect(badgeElement).toHaveClass(css);
    }
  );
});
