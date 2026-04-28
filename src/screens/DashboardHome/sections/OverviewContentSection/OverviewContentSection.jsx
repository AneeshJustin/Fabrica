import {
  AlertTriangleIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '../../../../components/ui/toggle-group';

const metricCards = [
  {
    title: 'TOTAL SALES',
    value: '$124,592.00',
    change: '+12.5%',
    changeType: 'positive',
    icon: TrendingUpIcon,
  },
  {
    title: 'ORDERS TODAY',
    value: '156',
    change: '+4.2%',
    changeType: 'positive',
    icon: ShoppingCartIcon,
  },
  {
    title: 'MONTHLY REVENUE',
    value: '$42,300.50',
    change: '-2.1%',
    changeType: 'negative',
    icon: TrendingUpIcon,
  },
  {
    title: 'TOTAL CUSTOMERS',
    value: '8,241',
    change: '+18.4%',
    changeType: 'positive',
    icon: UsersIcon,
  },
];

const performanceDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const performanceBars = [
  { day: 'MON', height: 'h-[108.39px]', active: false },
  { day: 'TUE', height: 'h-[176.14px]', active: false },
  { day: 'WED', height: 'h-[121.94px]', active: false },
  { day: 'THU', height: 'h-[243.89px]', active: true },
  { day: 'FRI', height: 'h-[162.59px]', active: false },
  { day: 'SAT', height: 'h-[81.3px]', active: false },
  { day: 'SUN', height: 'h-[135.5px]', active: false },
];

const stockAlerts = [
  {
    name: 'Essential Crew Neck',
    sku: 'SKU: TS-001-WH',
    stock: '4 Left',
    image:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axucnyb65chhgqoyd56jn-8uig5s97vuk8sqcwxl6pbl8uqlkqlh3pbjjxh66.png',
  },
  {
    name: 'Archival Runner',
    sku: 'SKU: SN-92-CR',
    stock: '2 Left',
    image:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axud2baxyeuihzqqoybu88r5ydl7em5tf1frok5ls0cj0mufkqfcs-9ovldyo.png',
  },
  {
    name: 'Ceramic Vessel',
    sku: 'SKU: HM-CV-BR',
    stock: '8 Left',
    image:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axuctln6qu87nsayzandsp0wspkk3zamlj4jd57ive7ehy338hil-k9znnpc5.png',
  },
];

const recentOrders = [
  {
    id: '#FB-2901',
    initials: 'JD',
    customer: 'Julianne Deas',
    status: 'Processing',
    statusType: 'dark',
    total: '$240.00',
    date: '2 mins ago',
  },
  {
    id: '#FB-2900',
    initials: 'MK',
    customer: 'Marcus Kael',
    status: 'Shipped',
    statusType: 'success',
    total: '$1,120.50',
    date: '1 hour ago',
  },
  {
    id: '#FB-2899',
    initials: 'SL',
    customer: 'Sarah Lund',
    status: 'Delivered',
    statusType: 'success',
    total: '$85.00',
    date: '3 hours ago',
  },
];

const topProducts = [
  {
    label: '#1 BEST SELLER',
    name: 'Over-dyed Linen Shirt',
    sold: '824 Units Sold',
    price: '$145',
    image:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudpxsfku-cjqaddd-zsqtexu-y0jyhwi-yf0k6pudmpsehuhmaeh5xhuneh.png',
  },
  {
    label: 'TRENDING',
    name: 'Studio Monitor Gen 2',
    sold: '612 Units Sold',
    price: '$299',
    image:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axuadz8g9-0tov6nagw8hfsl6h4q43kmtutmcrb8llroroxt9h-0m5gamnibj.png',
  },
];

export const OverviewContentSection = () => {
  return (
    <section className="relative flex w-full flex-col gap-8 self-stretch px-8 py-8">
      <header className="flex w-full flex-col gap-0.5">
        <h1 className="[font-family:'Manrope',Helvetica] text-[32px] font-semibold leading-[38.4px] tracking-[-0.32px] text-black">
          Dashboard Overview
        </h1>
        <p className="[font-family:'Manrope',Helvetica] text-base font-normal leading-[25.6px] text-[#444748]">
          Welcome back. Here is what&apos;s happening with Fabrica today.
        </p>
      </header>
      <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="rounded-xl border border-[#c4c7c7] bg-white shadow-none"
            >
              <CardContent className="flex flex-col gap-1 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 text-zinc-500">
                    <Icon className="h-4 w-4" />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`h-auto rounded-full px-2 py-1 [font-family:'Manrope',Helvetica] text-xs font-bold leading-4 shadow-none ${
                      card.changeType === 'positive'
                        ? 'bg-green-50 text-green-600 hover:bg-green-50'
                        : 'bg-red-50 text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {card.change}
                  </Badge>
                </div>
                <div className="pt-3">
                  <p className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.70px] text-[#444748]">
                    {card.title}
                  </p>
                </div>
                <p className="[font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                  {card.value}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
      <section className="grid w-full grid-cols-1 gap-8 xl:grid-cols-3">
        <Card className="rounded-xl border border-[#c4c7c7] bg-white shadow-none xl:col-span-2">
          <CardContent className="p-8">
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-between gap-4">
                <h2 className="[font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                  Weekly Performance
                </h2>
                <ToggleGroup
                  type="single"
                  defaultValue="orders"
                  className="inline-flex items-center gap-2"
                >
                  <ToggleGroupItem
                    value="orders"
                    className="h-auto rounded-lg bg-zinc-900 px-3 py-1 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-4 text-white data-[state=off]:bg-zinc-900 data-[state=off]:text-white"
                  >
                    Orders
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="revenue"
                    className="h-auto rounded-lg px-3 py-1 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-4 text-zinc-500"
                  >
                    Revenue
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex h-[271px] items-end justify-center gap-4 px-4 pt-[27.11px]">
                  {performanceBars.map((bar) => (
                    <div
                      key={bar.day}
                      className={`w-full flex-1 rounded-t-[8px] ${bar.height} ${
                        bar.active ? 'bg-zinc-900' : 'bg-zinc-100'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-start justify-between px-4">
                  {performanceDays.map((day) => (
                    <span
                      key={day}
                      className="[font-family:'Manrope',Helvetica] text-[10px] font-bold leading-[15px] tracking-[1px] text-zinc-400"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border border-[#c4c7c7] bg-white shadow-none">
          <CardContent className="flex flex-col gap-6 p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="[font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                Stock Alerts
              </h2>
              <AlertTriangleIcon className="h-4 w-4 text-[#ba1a1a]" />
            </div>
            <div className="flex flex-col gap-6 pb-2">
              {stockAlerts.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className="h-16 w-12 overflow-hidden rounded bg-neutral-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.28px] text-zinc-900">
                      {item.name}
                    </p>
                    <p className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-4 text-zinc-400">
                      {item.sku}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-5 text-[#ba1a1a]">
                      {item.stock}
                    </span>
                    <button
                      type="button"
                      className="[font-family:'Manrope',Helvetica] text-[10px] font-bold leading-[15px] text-zinc-400"
                    >
                      RESTOCK
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="h-auto w-full rounded-lg border-zinc-200 py-3 [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 text-zinc-900 shadow-none"
            >
              View Inventory
            </Button>
          </CardContent>
        </Card>
      </section>
      <section className="grid w-full grid-cols-1 gap-8 xl:grid-cols-12">
        <Card className="overflow-hidden rounded-xl border border-[#c4c7c7] bg-white shadow-none xl:col-span-8">
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b border-zinc-100 p-8">
              <h2 className="[font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                Recent Orders
              </h2>
              <button
                type="button"
                className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-5 text-zinc-900 underline"
              >
                See All Orders
              </button>
            </div>
            <Table>
              <TableHeader className="bg-neutral-50">
                <TableRow className="border-zinc-100 hover:bg-neutral-50">
                  <TableHead className="px-8 py-4 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[1.2px] text-zinc-400">
                    ORDER ID
                  </TableHead>
                  <TableHead className="px-8 py-4 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[1.2px] text-zinc-400">
                    CUSTOMER
                  </TableHead>
                  <TableHead className="px-8 py-4 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[1.2px] text-zinc-400">
                    STATUS
                  </TableHead>
                  <TableHead className="px-8 py-4 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[1.2px] text-zinc-400">
                    TOTAL
                  </TableHead>
                  <TableHead className="px-8 py-4 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[1.2px] text-zinc-400">
                    DATE
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id} className="border-neutral-50">
                    <TableCell className="px-8 py-[26px] [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 text-zinc-900">
                      {order.id}
                    </TableCell>
                    <TableCell className="px-8 py-[22px]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                          <span className="[font-family:'Manrope',Helvetica] text-[10px] font-bold text-[#1a1c1c]">
                            {order.initials}
                          </span>
                        </div>
                        <span className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-5 text-zinc-700">
                          {order.customer}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-[25.5px]">
                      <Badge
                        className={`h-auto rounded px-2 py-1 [font-family:'Manrope',Helvetica] text-[10px] font-bold leading-[normal] shadow-none ${
                          order.statusType === 'dark'
                            ? 'bg-zinc-900 text-white hover:bg-zinc-900'
                            : 'bg-green-100 text-green-700 hover:bg-green-100'
                        }`}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="[font-family:'Manrope',Helvetica] px-8 py-[26px] text-sm font-bold leading-5 text-[#1a1c1c]">
                      {order.total}
                    </TableCell>
                    <TableCell className="[font-family:'Manrope',Helvetica] px-8 py-[26px] text-sm font-normal leading-5 text-zinc-500">
                      {order.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="min-h-[500px]" />
          </CardContent>
        </Card>
        <Card className="rounded-xl border border-[#c4c7c7] bg-white shadow-none xl:col-span-4">
          <CardContent className="flex flex-col gap-8 p-8">
            <h2 className="[font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
              Top Products
            </h2>
            <div className="flex flex-col gap-8">
              {topProducts.map((product) => (
                <article key={product.name} className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-lg bg-neutral-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-auto w-full object-cover"
                    />
                    <Badge className="absolute left-4 top-4 h-auto rounded bg-white px-2 py-1 [font-family:'Manrope',Helvetica] text-[10px] font-extrabold leading-[15px] tracking-[1px] text-[#1a1c1c] shadow-[0px_1px_2px_#0000000d] hover:bg-white">
                      {product.label}
                    </Badge>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 flex-col">
                      <h3 className="[font-family:'Manrope',Helvetica] text-base font-semibold leading-6 text-zinc-900">
                        {product.name}
                      </h3>
                      <p className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-4 text-zinc-400">
                        {product.sold}
                      </p>
                    </div>
                    <div className="[font-family:'Manrope',Helvetica] text-base font-bold leading-6 text-zinc-900">
                      {product.price}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
