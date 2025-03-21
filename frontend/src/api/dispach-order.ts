import { api } from "@/lib/axios";

export interface DispatchOrderParams {
  orderId: string;
}

export const dispatchOrder = async ({ orderId }: DispatchOrderParams) => {
  const { data } = await api.patch(`/orders/${orderId}/dispatch`);
  return data;
};
