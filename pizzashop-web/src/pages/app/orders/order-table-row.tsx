import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableCell, TableRow } from "@/components/ui/table"
import { ArrowRight, Search, X } from "lucide-react"
import { OrderDetails } from "./order-details"

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              {/** Screen reader only, feito para o leitor de tela apenas, para quem não enxergar o ícone */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">98as68a75d67q2567das</TableCell>
      <TableCell className="text-muted-foreground">
        há 15 minutos
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell className="font-medium">
        Lucas Galarraga Burch
      </TableCell>
      <TableCell className="font-medium">
        R$ 149,98
      </TableCell>
      <TableCell>
        <Button variant="outline">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
