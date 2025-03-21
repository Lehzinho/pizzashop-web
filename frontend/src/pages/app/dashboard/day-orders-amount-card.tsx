import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export const DayOrderAmountCard = () => {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });

  let orderGreaterThanZero;
  if (dayOrdersAmount) {
    orderGreaterThanZero = dayOrdersAmount!.diffFromYesterday >= 0;
  }

  return (
    <Card className="gap-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount!.amount}
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
                {dayOrdersAmount.diffFromYesterday}%
              </span>{" "}
              em relação ontem
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};
