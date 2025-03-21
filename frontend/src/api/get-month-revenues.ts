import { api } from "@/lib/axios";

export interface getMonthRevenueResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const { data } = await api.get<getMonthRevenueResponse>(
    "/metrics/month-receipt"
  );
  return data;
}
