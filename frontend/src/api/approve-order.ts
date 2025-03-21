import { api } from "@/lib/axios";

export interface ApproveOrderParams {
  orderId: string;
}

export const approveOrder = async ({ orderId }: ApproveOrderParams) => {
  const { data } = await api.patch(`/orders/${orderId}/approve`);
  return data;
};
