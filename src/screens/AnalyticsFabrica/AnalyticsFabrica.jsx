import {
  Banknote,
  BellIcon,
  BoxIcon,
  CalendarIcon,
  ChevronRightIcon,
  DownloadIcon,
  LayoutDashboardIcon,
  PackageIcon,
  PercentIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ShoppingCart,
  StarIcon,
  UserPlus,
  UsersIcon,
  Target,
  TrendingUpIcon,
  TrendingDownIcon,
  BarChart3Icon,
  TargetIcon,
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
import { ToggleGroup, ToggleGroupItem } from '../../components/ui/toggle-group';

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

const keyMetrics = [
  {
    label: 'Total Revenue',
    value: '$142,850.00',
    icon: Banknote,
    change: '+12.5%',
    positive: true,
    statusText: 'Revenue trend strong',
    statusActive: true,
  },
  {
    label: 'Active Orders',
    value: '1,482',
    icon: ShoppingCart,
    change: '+8.2%',
    positive: true,
    statusText: 'Order queue pending',
    statusActive: false,
  },
  {
    label: 'New Customers',
    value: '842',
    icon: UserPlus,
    change: '-2.1%',
    positive: false,
    statusText: 'Acquisition target idle',
    statusActive: false,
  },
  {
    label: 'Conversion Rate',
    value: '3.82%',
    icon: Target,
    change: '+0.4%',
    positive: true,
    statusText: 'Goal currently active',
    statusActive: true,
  },
];

const topProducts = [
  { name: 'Nordic Runner X1', sales: '$42.4k', progress: 82, thumb: 'from-red-700 to-zinc-800' },
  { name: 'Classic Essence Watch', sales: '$31.8k', progress: 68, thumb: 'from-zinc-100 to-zinc-200' },
  { name: 'Studio Sound Over-Ear', sales: '$22.1k', progress: 44, thumb: 'from-zinc-700 to-zinc-950' },
];

const revenueTrendData = [
  { day: 'Mon', current: 46, previous: 39 },
  { day: 'Tue', current: 41, previous: 36 },
  { day: 'Wed', current: 58, previous: 47 },
  { day: 'Thu', current: 50, previous: 42 },
  { day: 'Fri', current: 63, previous: 51 },
  { day: 'Sat', current: 33, previous: 28 },
  { day: 'Sun', current: 54, previous: 45 },
];

export const AnalyticsFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/analytics-u45-fabrica-admin';
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

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
                  placeholder="Search analytics..."
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                    Analytics Overview
                  </h1>
                  <p className="text-base leading-[25.6px] text-[#444748]">
                    Track performance metrics and business insights
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 rounded-xl border-zinc-300 px-5 text-sm text-zinc-700"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Past 30 Days
                  </Button>
                  <Button
                    type="button"
                    className="h-11 rounded-xl bg-black px-5 text-sm text-white hover:bg-black/90"
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {keyMetrics.map((metric) => {
                  const MetricIcon = metric.icon;
                  return (
                  <Card
                    key={metric.label}
                    className="rounded-xl border-[#e6e6e6] bg-white shadow-none"
                  >
                    <CardContent className="p-6">
                      <div className="flex min-h-[84px] items-start justify-between gap-2">
                        <div className="flex min-w-0 flex-1 items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100 text-zinc-700">
                            <MetricIcon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium tracking-[0.28px] text-[#444748]">
                              {metric.label}
                            </p>
                            <p className="mt-2 truncate text-2xl font-bold tracking-[-0.72px] text-black lg:text-3xl">
                              {metric.value}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`shrink-0 whitespace-nowrap text-right flex items-center gap-1 text-xs font-medium ${
                            metric.positive ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {metric.positive ? (
                            <TrendingUpIcon className="h-3 w-3" />
                          ) : (
                            <TrendingDownIcon className="h-3 w-3" />
                          )}
                          {metric.change}
                        </div>
                      </div>
                      <div className="mb-3 mt-4 w-full border-t border-zinc-200" />
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            metric.statusActive ? 'bg-emerald-500' : 'bg-zinc-400'
                          }`}
                        />
                        <span className="text-xs text-[#71717A]">
                          {metric.statusText}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
                <Card className="rounded-lg border-[#d4d4d8] bg-white shadow-none">
                  <CardContent className="p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-[#1a1c1c]">Revenue Trends</h2>
                        <p className="text-xs text-[#71717A]">Weekly performance comparisons</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#71717A]">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-black" />
                          Current
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-zinc-300" />
                          Previous
                        </span>
                      </div>
                    </div>
                    <div className="relative h-56 rounded-md bg-[#f4f4f5] px-5 pb-5 pt-6">
                      <div className="absolute inset-x-5 top-7 h-0.5 bg-zinc-200" />
                      <div className="absolute inset-x-5 top-[78px] h-0.5 bg-zinc-200" />
                      <div className="absolute inset-x-5 top-[128px] h-0.5 bg-zinc-200" />
                      <div className="absolute inset-x-5 bottom-8 h-0.5 bg-zinc-200" />
                      <div className="flex h-full items-end justify-between gap-2">
                        {revenueTrendData.map((item) => (
                          <div key={item.day} className="flex w-full flex-col items-center justify-end gap-1">
                            <div className="flex h-[78%] w-full items-end justify-center gap-1">
                              <div
                                className="w-[44%] rounded-t bg-zinc-400/70"
                                style={{ height: `${Math.max(20, item.previous)}%` }}
                              />
                              <div
                                className="w-[44%] rounded-t bg-zinc-900"
                                style={{ height: `${item.current}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-zinc-400">{item.day}</span>
                            <span className="text-[9px] text-zinc-500">{item.current}k / {item.previous}k</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-lg border-[#d4d4d8] bg-white shadow-none">
                  <CardContent className="p-4">
                    <h2 className="mb-4 text-2xl font-semibold text-[#1a1c1c]">Top Products</h2>
                    <div className="space-y-4">
                      {topProducts.map((product) => (
                        <div key={product.name} className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <div className={`h-8 w-8 rounded bg-linear-to-br ${product.thumb}`} />
                            <p className="flex-1 truncate text-xs text-[#1a1c1c]">{product.name}</p>
                            <span className="text-xs text-[#52525B]">{product.sales}</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-zinc-200">
                            <div
                              className="h-full rounded-full bg-zinc-900"
                              style={{ width: `${product.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      className="mt-5 h-auto p-0 text-xs text-[#1a1c1c] hover:bg-transparent"
                    >
                      View Detailed Report
                      <ChevronRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="rounded-lg border-[#d4d4d8] bg-white shadow-none">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between border-b border-zinc-200 px-4 py-3">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#1a1c1c]">Customer Growth & Loyalty</h2>
                      <p className="text-xs text-[#71717A]">Breakdown of customer segments and retention</p>
                    </div>
                    <ToggleGroup
                      type="single"
                      value={selectedPeriod}
                      onValueChange={(value) => {
                        if (value) setSelectedPeriod(value);
                      }}
                      className="justify-start rounded-md bg-zinc-100 p-1"
                    >
                      <ToggleGroupItem
                        value="Weekly"
                        className="h-6 rounded px-3 text-[10px] font-semibold data-[state=on]:bg-white data-[state=on]:text-black"
                      >
                        Weekly
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="Monthly"
                        className="h-6 rounded px-3 text-[10px] font-semibold data-[state=on]:bg-white data-[state=on]:text-black"
                      >
                        Monthly
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="Yearly"
                        className="h-6 rounded px-3 text-[10px] font-semibold data-[state=on]:bg-white data-[state=on]:text-black"
                      >
                        Yearly
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div className="space-y-2 px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#71717A]">Retention Rate</p>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-bold text-[#1a1c1c]">78.4%</p>
                        <span className="pb-1 text-xs font-medium text-emerald-600">+4.2%</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#71717A]">
                        <span>Returning Customers</span>
                        <span>642</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-zinc-200">
                        <div className="h-full w-[78%] rounded-full bg-zinc-900" />
                      </div>
                    </div>
                    <div className="space-y-2 px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#71717A]">Avg. Order Value</p>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-bold text-[#1a1c1c]">$154.20</p>
                        <span className="pb-1 text-xs font-medium text-emerald-600">+$12.50</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#71717A]">
                        <span>Previous Month</span>
                        <span>$141.70</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-zinc-200">
                        <div className="h-full w-[62%] rounded-full bg-zinc-900" />
                      </div>
                    </div>
                    <div className="space-y-3 px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#71717A]">Churn Risk</p>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-bold text-[#1a1c1c]">12.5%</p>
                        <span className="pb-1 text-xs font-medium text-rose-500">-0.8%</span>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-8 w-full rounded-md border-zinc-500 text-xs text-[#1a1c1c]"
                      >
                        Launch Re-engagement Campaign
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
