import { api } from "@/lib/axios";

export interface CancelOrderParams {
  orderId: string;
}

export const cancelOrder = async ({ orderId }: CancelOrderParams) => {
  const { data } = await api.patch(`/orders/${orderId}/cancel`);
  return data;
};
