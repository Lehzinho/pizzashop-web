import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "./order-status";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { GetOrdersResponse } from "@/api/get-orders";
import { approveOrder } from "@/api/approve-order";
import { dispatchOrder } from "@/api/dispach-order";
import { deliverOrder } from "@/api/deliver-order";

export interface OrderTableRowProps {
  orders: {
    orderId: string;
    createdAt: Date;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export const OrderTableRow = ({ orders }: OrderTableRowProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryClient = useQueryClient();

  function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
    const cached = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ["orders"],
    });

    cached.forEach(([cacheKey, cachedData]) => {
      if (!cachedData) {
        return;
      }
      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cachedData,
        orders: cachedData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status };
          }
          return order;
        }),
      });
    });
  }
  const { mutateAsync: cancelOrderfn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, "canceled");
      },
      onError: () => {},
    });
  const { mutateAsync: approveOrderfn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, "processing");
      },
      onError: () => {},
    });
  const { mutateAsync: dispatchOrderfn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, "delivering");
      },
      onError: () => {},
    });
  const { mutateAsync: deliverOrderfn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, "delivered");
      },
      onError: () => {},
    });

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xl">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails open={isDetailsOpen} orderId={orders.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {orders.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(new Date(orders.createdAt), {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={orders.status} />
      </TableCell>
      <TableCell className="font-medium">{orders.customerName}</TableCell>
      <TableCell className="font-medium">
        {(orders.total / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell>
        {orders.status === "pending" && (
          <Button
            variant="outline"
            size="xl"
            onClick={() => approveOrderfn({ orderId: orders.orderId })}
            disabled={isApprovingOrder}
          >
            <ArrowRight className="h-3 w-3 mr-2" />
            Aprovar
          </Button>
        )}
        {orders.status === "processing" && (
          <Button
            variant="outline"
            size="xl"
            onClick={() => dispatchOrderfn({ orderId: orders.orderId })}
            disabled={isDispatchingOrder}
          >
            <ArrowRight className="h-3 w-3 mr-2" />
            Em entrega
          </Button>
        )}
        {orders.status === "delivering" && (
          <Button
            variant="outline"
            size="xl"
            onClick={() => deliverOrderfn({ orderId: orders.orderId })}
            disabled={isDeliveringOrder}
          >
            <ArrowRight className="h-3 w-3 mr-2" />
            Emtregue
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={
            !["pending", "processing"].includes(orders.status) ||
            isCancelingOrder
          }
          onClick={() => cancelOrderfn({ orderId: orders.orderId })}
          variant="ghost"
          size="xl"
        >
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};
