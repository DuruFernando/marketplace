import { Helmet } from 'react-helmet-async'

import { AdvertisingProducts } from './advertised-products'
import { SalesProducts } from './sales-products'
import { VisitingPeople } from './visiting-people'
import { VisitingPeopleChart } from './visiting-people-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="m-auto flex max-w-[1030px] flex-col gap-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Últimos 30 dias</h1>
          <span className="text-muted-foreground">
            Confira as estatísticas da sua loja no último mês
          </span>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 flex flex-col gap-5">
            <SalesProducts />
            <AdvertisingProducts />
            <VisitingPeople />
          </div>
          <div className="col-span-9 flex flex-1">
            <VisitingPeopleChart />
          </div>
        </div>
      </div>
    </>
  )
}
