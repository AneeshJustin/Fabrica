import {
  BellIcon,
  BoxIcon,
  ChevronRightIcon,
  CalendarCheck2,
  CircleQuestionMark,
  DownloadIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  ListIcon,
  PackageIcon,
  PercentIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  TriangleAlert,
  UsersIcon,
  Truck,
  Warehouse,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

const sidebarItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
    path: '/dashboard-home-u45-fabrica-admin',
  },
  { label: 'Products', icon: PackageIcon, path: '/products-u45-fabrica-admin' },
  {
    label: 'Orders',
    icon: ShoppingCartIcon,
    path: '/orders-u45-fabrica-admin',
  },
  { label: 'Customers', icon: UsersIcon, path: '/customers-u45-fabrica-admin' },
  { label: 'Inventory', icon: BoxIcon, path: '/inventory-u45-fabrica-admin' },
  {
    label: 'Analytics',
    icon: PercentIcon,
    path: '/analytics-u45-fabrica-admin',
  },
  {
    label: 'Discounts',
    icon: ShoppingBagIcon,
    path: '/discounts-u45-fabrica-admin',
  },
  { label: 'Reviews', icon: StarIcon, path: '/reviews-u45-fabrica-admin' },
  { label: 'Settings', icon: SettingsIcon, path: '/settings-u45-fabrica-admin' },
];

const inventoryStats = [
  {
    label: 'TOTAL SKU',
    value: '12,847',
    icon: CalendarCheck2,
    background: 'bg-[#FFFFFF]',
    textColor: 'text-[#18181B]',
    subText: '+2 from last two month',
    subTextColor: 'text-zinc-500',
  },
  {
    label: 'LOW STOCK',
    value: '23',
    icon: TriangleAlert,
    background: 'bg-[#BA1A1A1A]',
    textColor: 'text-[#BA1A1A]',
    subText: 'Requires immediate attention',
    subTextColor: 'text-[#BA1A1A]',
  },
  {
    label: 'WAREHOUSE UTILIZATION',
    value: '78%',
    icon: Warehouse,
    background: 'bg-[#E2E3DE]',
    textColor: 'text-[#18181B]',
    progress: 80,
  },
  {
    label: 'IN TRANSIT',
    value: '156',
    icon: Truck,
    background: 'bg-[#FFFFFF]',
    textColor: 'text-[#18181B]',
    subText: 'Expected within 48 hours',
    subTextColor: 'text-zinc-500',
  },
];

const inventoryItems = [
  {
    id: 'WH001',
    name: 'Nordic Hammer X1',
    sku: 'NH-X1-BLK',
    category: 'Tools',
    warehouse: 'Warehouse A',
    committed: 45,
    available: 128,
    status: 'In Stock',
  },
  {
    id: 'WH002',
    name: 'Minimalist Wool Coat',
    sku: 'MW-COAT-GRY',
    category: 'Apparel',
    warehouse: 'Warehouse B',
    committed: 23,
    available: 12,
    status: 'Low Stock',
  },
  {
    id: 'WH003',
    name: 'Ceramic Vase Set',
    sku: 'CV-SET-WHT',
    category: 'Home',
    warehouse: 'Warehouse A',
    committed: 8,
    available: 67,
    status: 'In Stock',
  },
  {
    id: 'WH004',
    name: 'Leather Backpack',
    sku: 'LB-BPK-BRN',
    category: 'Accessories',
    warehouse: 'Warehouse C',
    committed: 34,
    available: 5,
    status: 'Critical',
  },
  {
    id: 'WH005',
    name: 'Smart Watch Pro',
    sku: 'SW-PRO-BLK',
    category: 'Electronics',
    warehouse: 'Warehouse B',
    committed: 67,
    available: 234,
    status: 'In Stock',
  },
];

const statusColors = {
  'In Stock': 'bg-green-100 text-green-800',
  'Low Stock': 'bg-yellow-100 text-yellow-800',
  Critical: 'bg-red-100 text-red-800',
};

const statusPills = {
  'In Stock': 'bg-[#E7F5EA] text-[#1F7A37]',
  'Low Stock': 'bg-[#FEE2E2] text-[#BA1A1A]',
  Critical: 'bg-[#BA1A1A] text-white',
};

const warehouseData = [
  { name: 'Warehouse A', percentage: 85, color: 'bg-blue-600' },
  { name: 'Warehouse B', percentage: 72, color: 'bg-green-600' },
  { name: 'Warehouse C', percentage: 68, color: 'bg-purple-600' },
];

const stockActivity = [
  {
    time: '2 hours ago',
    action: 'Low stock alert for Leather Backpack',
    type: 'warning',
  },
  {
    time: '4 hours ago',
    action: 'Shipment received: Nordic Hammer X1 (50 units)',
    type: 'success',
  },
  {
    time: '6 hours ago',
    action: 'Order fulfilled: Minimalist Wool Coat (5 units)',
    type: 'info',
  },
  {
    time: '8 hours ago',
    action: 'Inventory count completed for Warehouse A',
    type: 'success',
  },
  {
    time: '12 hours ago',
    action: 'Transfer initiated: Warehouse A to Warehouse C',
    type: 'info',
  },
];

export const InventoryFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/inventory-u45-fabrica-admin';
  const [selectedWarehouse, setSelectedWarehouse] = useState('All');

  return (
    <div
      className="min-h-screen bg-[#f9f9f9] [font-family:'Manrope',Helvetica]"
      data-model-id="111:771"
    >
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-neutral-50 lg:flex lg:flex-col">
          <div className="p-4">
            <div className="px-4 py-6">
              <div className="text-2xl font-extrabold tracking-[-1.20px] leading-8 text-zinc-900">
                Fabrica
              </div>
              <div className="text-sm font-medium tracking-[-0.35px] leading-5 text-zinc-500">
                Admin Portal
              </div>
            </div>
            <nav aria-label="Sidebar navigation" className="mt-2 space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => item.path !== '#' && navigate(item.path)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left transition-colors ${
                      isActive
                        ? 'bg-zinc-900 text-white'
                        : 'text-zinc-500 hover:bg-zinc-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-medium tracking-[-0.35px] leading-5">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#ffffffcc] backdrop-blur-[6px] backdrop-brightness-[100%]">
            <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
              <div className="relative w-full max-w-[368px]">
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <Input
                  defaultValue=""
                  placeholder="Search inventory..."
                  className="h-11 rounded-full border-[#c4c7c7] bg-[#eeeeee] pl-11 text-sm text-gray-500 placeholder:text-gray-500"
                />
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-zinc-700 hover:bg-transparent"
                >
                  <BellIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-zinc-700 hover:bg-transparent"
                >
                  <CircleQuestionMark className="h-5 w-5" />
                </Button>
                <div className="h-8 w-px bg-zinc-200" />
                <button type="button" className="flex items-center gap-3">
                  <span className="text-sm font-semibold leading-5 text-zinc-900">
                    Admin
                  </span>
                  <Avatar className="h-8 w-8 rounded-full border">
                    <AvatarImage
                      src="https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png"
                      alt="Admin"
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                    Inventory Management
                  </h1>
                  <p className="text-base leading-[25.6px] text-[#444748]">
                    Monitor stock levels, warehouse capacity, and product
                    availability
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-md border-zinc-200 bg-white px-4 text-xs font-semibold text-[#444748] shadow-none hover:bg-zinc-50"
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                  <Button
                    type="button"
                    className="h-10 rounded-md bg-black px-4 text-xs font-semibold text-white shadow-none hover:bg-black"
                  >
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Restock Order
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {inventoryStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className={`rounded-xl border-0 shadow-none ${stat.background}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              stat.label === 'LOW STOCK'
                                ? 'bg-transparent'
                                : 'bg-white/40'
                            }`}
                          >
                            <stat.icon
                              className={`h-5 w-5 ${stat.textColor}`}
                            />
                          </div>
                          <div>
                            <p
                              className={`text-3xl font-bold tracking-[-0.72px] ${stat.textColor}`}
                            >
                              {stat.value}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-medium tracking-[0.28px] text-[#71717A]">
                          {stat.label}
                        </p>
                      </div>

                      {stat.progress ? (
                        <div className="mt-4">
                          <div className="h-2 w-full rounded-full bg-white/50">
                            <div
                              className="h-2 rounded-full bg-[#18181B]"
                              style={{ width: `${stat.progress}%` }}
                            />
                          </div>
                          <p className="mt-2 text-sm text-[#71717A]">
                            {stat.progress}% completed
                          </p>
                        </div>
                      ) : null}

                      {stat.subText ? (
                        <p className={`mt-4 text-sm ${stat.subTextColor}`}>
                          {stat.subText}
                        </p>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="h-8 rounded-md border-zinc-200 bg-white px-3 text-xs font-medium text-[#444748] shadow-none"
                          >
                            Category: All
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-8 rounded-md border-zinc-200 bg-white px-3 text-xs font-medium text-[#444748] shadow-none"
                          >
                            Status: All
                          </Button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#71717A]">
                            View:
                          </span>
                          <div className="flex h-10 items-center rounded-full bg-zinc-100 p-1">
                            <button
                              type="button"
                              aria-label="List view"
                              aria-pressed="true"
                              className="flex h-8 w-10 items-center justify-center rounded-full bg-white text-[#18181B] shadow-sm"
                            >
                              <ListIcon className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              aria-label="Grid view"
                              aria-pressed="false"
                              className="flex h-8 w-10 items-center justify-center rounded-full text-[#71717A]"
                            >
                              <LayoutGridIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full table-fixed">
                          <thead>
                            <tr className="border-b border-zinc-200">
                              <th className="w-[34%] pb-3 text-left text-[10px] font-semibold tracking-[0.60px] text-[#71717A]">
                                PRODUCT INFO
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                SKU
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                Category
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                Warehouse
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                Committed
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                Available
                              </th>
                              <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                Status
                              </th>
                              <th className="w-[92px] pb-3 text-right text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {inventoryItems.map((item) => (
                              <tr
                                key={item.id}
                                className="border-b border-zinc-100"
                              >
                                <td className="py-4">
                                  <div className="flex min-w-0 items-center gap-3">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-zinc-200" />
                                    <div className="min-w-0">
                                      <div className="truncate text-sm font-semibold text-[#1a1c1c]">
                                        {item.name}
                                      </div>
                                      <div className="truncate text-xs text-[#A1A1AA]">
                                        Midnight Black / Large
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 text-sm text-[#444748]">
                                  {item.sku}
                                </td>
                                <td className="py-4 text-sm text-[#444748]">
                                  {item.category}
                                </td>
                                <td className="py-4 text-sm text-[#444748]">
                                  {item.warehouse.replace('Warehouse ', '')}
                                </td>
                                <td className="py-4 text-sm text-[#444748]">
                                  {item.committed}
                                </td>
                                <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                  {item.available}
                                </td>
                                <td className="py-4">
                                  <span
                                    className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${
                                      statusPills[item.status] ?? 'bg-zinc-100 text-zinc-700'
                                    }`}
                                  >
                                    {item.status}
                                  </span>
                                </td>
                                <td className="py-4 text-right">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="h-7 rounded-md border-zinc-200 bg-white px-3 text-[10px] font-semibold text-[#444748] shadow-none hover:bg-zinc-50"
                                  >
                                    {item.status === 'Critical' ? 'RESTOCK' : 'UPDATE'}
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex items-center justify-between pt-2 text-xs text-[#A1A1AA]">
                        <span>Showing 1 to 4 of 1,248 entries</span>
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10 w-10 rounded-lg border-zinc-200 bg-white p-0 text-[#71717A] shadow-none hover:bg-zinc-50"
                            aria-label="Previous page"
                          >
                            <ChevronRightIcon className="h-4 w-4 rotate-180" />
                          </Button>
                          <Button
                            type="button"
                            className="h-10 w-10 rounded-lg bg-[#18181B] p-0 text-sm font-semibold text-white shadow-none hover:bg-[#18181B]"
                          >
                            1
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10 w-10 rounded-lg border-zinc-200 bg-white p-0 text-sm font-semibold text-[#71717A] shadow-none hover:bg-zinc-50"
                          >
                            2
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10 w-10 rounded-lg border-zinc-200 bg-white p-0 text-sm font-semibold text-[#71717A] shadow-none hover:bg-zinc-50"
                          >
                            3
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10 w-10 rounded-lg border-zinc-200 bg-white p-0 text-[#71717A] shadow-none hover:bg-zinc-50"
                            aria-label="Next page"
                          >
                            <ChevronRightIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-6">
                  <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                            Global Fulfillment Status
                          </h2>
                          <p className="mt-1 text-xs text-[#71717A]">
                            Real-time status of major logistics hubs.
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold tracking-[0.60px] text-[#A1A1AA]">
                          LIVE DATA
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-lg bg-[#FAFAFA] p-4">
                          <p className="text-[10px] font-semibold tracking-[0.60px] text-[#A1A1AA]">
                            NORTH AMERICA (LA)
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#1a1c1c]">
                            94%
                          </p>
                          <p className="mt-1 text-xs text-[#BA1A1A]">Near Capacity</p>
                        </div>
                        <div className="rounded-lg bg-[#FAFAFA] p-4">
                          <p className="text-[10px] font-semibold tracking-[0.60px] text-[#A1A1AA]">
                            EUROPE (BER)
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#1a1c1c]">
                            62%
                          </p>
                          <p className="mt-1 text-xs text-green-600">Healthy</p>
                        </div>
                        <div className="rounded-lg bg-[#FAFAFA] p-4">
                          <p className="text-[10px] font-semibold tracking-[0.60px] text-[#A1A1AA]">
                            ASIA (TYO)
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#1a1c1c]">
                            78%
                          </p>
                          <p className="mt-1 text-xs text-[#71717A]">Optimal</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl border-0 bg-[#18181B] shadow-none">
                    <CardContent className="p-6">
                      <h2 className="text-sm font-semibold text-white">Stock Activity</h2>

                      <div className="mt-4 space-y-4">
                        {stockActivity.slice(0, 3).map((activity, index) => (
                          <div key={index} className="flex gap-3">
                            <div
                              className={`mt-1 h-2 w-2 rounded-full ${
                                activity.type === 'warning'
                                  ? 'bg-red-500'
                                  : activity.type === 'success'
                                    ? 'bg-green-500'
                                    : 'bg-zinc-400'
                              }`}
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white">
                                {activity.action}
                              </p>
                              <p className="mt-1 text-[10px] text-[#A1A1AA]">
                                {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        className="mt-6 h-9 w-full rounded-md border-white/10 bg-transparent text-xs font-semibold text-white shadow-none hover:bg-white/5"
                      >
                        VIEW ALL LOGS
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
