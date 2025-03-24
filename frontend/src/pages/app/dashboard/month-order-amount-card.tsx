import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSeketon } from "./metric-card-skeleton";

export const MonthOrderAmountCard = () => {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  let orderGreaterThanZero;
  if (monthOrdersAmount) {
    orderGreaterThanZero = monthOrdersAmount!.diffFromLastMonth >= 0;
  }

  return (
    <Card className="gap-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foregorund">
              <span
                className={`text-${
                  orderGreaterThanZero ? "emerald" : "rose"
                }-500 dark:text-${
                  orderGreaterThanZero ? "emerald" : "rose"
                }-400`}
              >
                {orderGreaterThanZero && "+ "}
                {monthOrdersAmount!.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSeketon />
        )}
      </CardContent>
    </Card>
  );
};
