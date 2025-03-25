export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  pending: "Pendente",
  processing: "Em preparo",
};

export const OrderStatus = ({ status }: OrderStatusProps) => {
  const color =
    status === "pending"
      ? "bg-slate-400"
      : status === "canceled"
      ? "bg-rose-500"
      : status === "delivered"
      ? "bg-emerald-500"
      : "bg-amber-500";
  return (
    <div className="flex items-center gap-2">
      <span data-testid="badge" className={`h-2 w-2 rounded-full  ${color}`} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
};
