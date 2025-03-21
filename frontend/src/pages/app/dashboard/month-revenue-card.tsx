import { getMonthRevenue } from "@/api/get-month-revenues";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export const MonthRevenueCard = () => {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ["metrics", "month-revenue"],
  });

  let orderGreaterThanZero;
  if (monthRevenue) {
    orderGreaterThanZero = monthRevenue!.diffFromLastMonth >= 0;
  }
  return (
    <Card className="gap-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString("pt-Br", {
                currency: "BRL",
                style: "currency",
              })}
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
                {monthRevenue!.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};
