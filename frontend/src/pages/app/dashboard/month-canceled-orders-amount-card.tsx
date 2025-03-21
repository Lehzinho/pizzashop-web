import { getMonthCanceldedOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export const MonthCanceledOrderAmountCard = () => {
  const { data: monthCanceldedOrdersAmount } = useQuery({
    queryFn: getMonthCanceldedOrdersAmount,
    queryKey: ["metrics", "month-canceled-orders-amount"],
  });

  let orderGreaterThanZero;
  if (monthCanceldedOrdersAmount) {
    orderGreaterThanZero = monthCanceldedOrdersAmount!.diffFromLastMonth <= 0;
  }
  return (
    <Card className="gap-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceldedOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceldedOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foregorund">
              <span
                className={`text-${
                  orderGreaterThanZero ? "emerald" : "rose"
                }-500 dark:text-${
                  orderGreaterThanZero ? "emerald" : "rose"
                }-400`}
              >
                {!orderGreaterThanZero && "+ "}
                {monthCanceldedOrdersAmount!.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};
