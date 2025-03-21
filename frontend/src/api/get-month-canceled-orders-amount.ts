import { api } from "@/lib/axios";

export interface getMonthCanceldedOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCanceldedOrdersAmount() {
  const { data } = await api.get<getMonthCanceldedOrdersAmountResponse>(
    "/metrics/month-canceled-orders-amount"
  );
  return data;
}
