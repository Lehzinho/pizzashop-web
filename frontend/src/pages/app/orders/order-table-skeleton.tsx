import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const OrderTableSkeleton = () => {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xl">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[172px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[178px]" />
        </TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[64px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[92px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w=[92px]" />
        </TableCell>
      </TableRow>
    );
  });
};
