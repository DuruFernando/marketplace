import { format, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  {
    date: '02',
    fullDate: '02 DE OUTUBRO',
    visitors: 1,
  },
  {
    date: '03',
    fullDate: '03 DE OUTUBRO',
    visitors: 10,
  },
  {
    date: '04',
    fullDate: '04 DE OUTUBRO',
    visitors: 25,
  },
  {
    date: '05',
    fullDate: '05 DE OUTUBRO',
    visitors: 12,
  },
  {
    date: '06',
    fullDate: '06 DE OUTUBRO',
    visitors: 10,
  },
  {
    date: '07',
    fullDate: '07 DE OUTUBRO',
    visitors: 18,
  },
  {
    date: '08',
    fullDate: '08 DE OUTUBRO',
    visitors: 2,
  },
  {
    date: '09',
    fullDate: '09 DE OUTUBRO',
    visitors: 45,
  },
  {
    date: '10',
    fullDate: '10 DE OUTUBRO',
    visitors: 20,
  },
  {
    date: '11',
    fullDate: '11 DE OUTUBRO',
    visitors: 0,
  },
  {
    date: '12',
    fullDate: '12 DE OUTUBRO',
    visitors: 33,
  },
  {
    date: '13',
    fullDate: '13 DE OUTUBRO',
    visitors: 78,
  },
  {
    date: '14',
    fullDate: '14 DE OUTUBRO',
    visitors: 2,
  },
  {
    date: '15',
    fullDate: '15 DE OUTUBRO',
    visitors: 25,
  },
]

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <Card className="flex flex-col gap-3 rounded-xl p-4">
        <CardHeader className="flex p-0">
          <CardTitle className="text-md font-bold uppercase">
            {payload[0].payload.fullDate}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row gap-2 p-0">
          <img src="visitantes.svg" alt="" width={20} />
          <span className="text-base text-muted-foreground">
            {payload[0].payload.visitors} visitantes
          </span>
        </CardContent>
      </Card>
    )
  }

  return null
}

export function VisitingPeopleChart() {
  // const [dateRange, setDateRange] = useState<DateRange | undefined>({
  //   from: subMonths(new Date(), 1),
  //   to: new Date(),
  // })

  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <CardTitle className="text-lg font-bold">Visitantes</CardTitle>
          <div className="flex flex-row items-center gap-1">
            <img src="calendar.svg" alt="" />
            <span className="text-2xs uppercase text-muted-foreground">
              {`${format(subDays(new Date(), 30), "dd 'de' MMMM", {
                locale: ptBR,
              })} - ${format(new Date(), "dd 'de' MMMM", {
                locale: ptBR,
              })}`}
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <ResponsiveContainer width="100%" height={248}>
            <LineChart data={data} style={{ fontSize: 12 }}>
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={20}
                tickFormatter={(value: number) => value.toLocaleString('pt-BR')}
              />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                dy={16}
                padding={{ left: 15, right: 15 }}
              />

              <CartesianGrid
                vertical={false}
                strokeDasharray="15 15"
                className="stroke-slate-200"
              />

              <Tooltip content={<CustomTooltip />} cursor={false} />

              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="visitors"
                stroke="#5EC5FD"
                dot={<></>}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  )
}
