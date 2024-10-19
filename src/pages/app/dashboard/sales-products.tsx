import { Card, CardContent } from '@/components/ui/card'

export function SalesProducts() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="grid grid-cols-6 gap-12 p-2">
        <div className="col-span-2 flex h-22 w-20 items-center justify-center rounded-2xl bg-blue-light">
          <img className="h-10 w-10" src="sale-tag.svg" alt="" />
        </div>
        <div className="col-span-3 flex flex-col justify-center gap-1">
          <h1 className="text-2xl font-bold">24</h1>
          <span className="text-sm leading-4 text-muted-foreground">
            Produtos vendidos
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
