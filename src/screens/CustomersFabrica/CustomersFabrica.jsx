import {
  BellIcon,
  BoxIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  PackageIcon,
  PercentIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  UsersIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  MailIcon,
  PhoneIcon,
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
  { label: 'Settings', icon: SettingsIcon, path: '#' },
];

const customerStats = [
  {
    label: 'Total Customers',
    value: '8,429',
    change: '+12.5%',
    positive: true,
  },
  { label: 'Active Members', value: '6,234', change: '+8.2%', positive: true },
  {
    label: 'Average Order Value',
    value: '$154.20',
    change: '-2.4%',
    positive: false,
  },
  {
    label: 'New Registrations',
    value: '842',
    change: '+18.7%',
    positive: true,
  },
];

const customers = [
  {
    id: 1,
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    status: 'VIP',
    orders: 24,
    spent: '$3,456.80',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    status: 'Active',
    orders: 12,
    spent: '$1,234.50',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'Active',
    orders: 8,
    spent: '$892.30',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david.kim@example.com',
    status: 'VIP',
    orders: 31,
    spent: '$5,678.90',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    status: 'Recent',
    orders: 2,
    spent: '$156.00',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
  },
];

const statusColors = {
  VIP: 'bg-purple-100 text-purple-800',
  Active: 'bg-green-100 text-green-800',
  Recent: 'bg-blue-100 text-blue-800',
};

export const CustomersFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/customers-u45-fabrica-admin';
  const [selectedTab, setSelectedTab] = useState('All Customers');

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
                  placeholder="Search customers..."
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
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                  Customers
                </h1>
                <p className="text-base leading-[25.6px] text-[#444748]">
                  Manage customer relationships and analyze purchasing behavior
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {customerStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="rounded-xl border-[#e6e6e6] bg-white shadow-none"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium tracking-[0.28px] text-[#444748]">
                            {stat.label}
                          </p>
                          <p className="mt-2 text-3xl font-bold tracking-[-0.72px] text-black">
                            {stat.value}
                          </p>
                        </div>
                        <div
                          className={`flex items-center gap-1 text-xs font-medium ${
                            stat.positive ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {stat.positive ? (
                            <TrendingUpIcon className="h-3 w-3" />
                          ) : (
                            <TrendingDownIcon className="h-3 w-3" />
                          )}
                          {stat.change}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2 border-b border-zinc-200">
                      {['All Customers', 'VIP', 'Recent'].map((tab) => (
                        <Button
                          key={tab}
                          type="button"
                          variant="ghost"
                          className={`h-auto rounded-none border-b-2 px-4 py-2 text-sm font-medium tracking-[0.28px] transition-colors ${
                            selectedTab === tab
                              ? 'border-black text-black'
                              : 'border-transparent text-[#444748] hover:text-black'
                          }`}
                          onClick={() => setSelectedTab(tab)}
                        >
                          {tab}
                        </Button>
                      ))}
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Customer
                            </th>
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Email Address
                            </th>
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Status
                            </th>
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Orders
                            </th>
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Total Spent
                            </th>
                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr
                              key={customer.id}
                              className="border-b border-zinc-100"
                            >
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-10 w-10 rounded-full">
                                    <AvatarImage
                                      src={customer.avatar}
                                      alt={customer.name}
                                    />
                                    <AvatarFallback>
                                      {customer.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                      {customer.name}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <MailIcon className="h-3 w-3 text-[#444748]" />
                                      <PhoneIcon className="h-3 w-3 text-[#444748]" />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 text-sm text-[#444748]">
                                {customer.email}
                              </td>
                              <td className="py-4">
                                <span
                                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[customer.status]}`}
                                >
                                  {customer.status}
                                </span>
                              </td>
                              <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                {customer.orders}
                              </td>
                              <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                {customer.spent}
                              </td>
                              <td className="py-4">
                                <Button
                                  type="button"
                                  variant="ghost"
                                  className="h-auto p-0 text-zinc-700 hover:bg-transparent"
                                >
                                  <ChevronRightIcon className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#444748]">
                        Showing 1-10 of 8,429 customers
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto rounded-lg border-[#c4c7c7] px-3 py-1 text-sm text-[#1a1c1c]"
                        >
                          Previous
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto rounded-lg border-[#c4c7c7] px-3 py-1 text-sm text-[#1a1c1c]"
                        >
                          1
                        </Button>
                        <Button
                          type="button"
                          className="h-auto rounded-lg bg-black px-3 py-1 text-sm text-white"
                        >
                          2
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto rounded-lg border-[#c4c7c7] px-3 py-1 text-sm text-[#1a1c1c]"
                        >
                          3
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-auto rounded-lg border-[#c4c7c7] px-3 py-1 text-sm text-[#1a1c1c]"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c] mb-4">
                      Retention Heatmap
                    </h2>
                    <div className="h-48 bg-[#f3f3f4] rounded-lg flex items-center justify-center">
                      <p className="text-[#444748]">
                        Customer retention visualization
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c] mb-4">
                      Customer Segment Analysis
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#444748]">
                          VIP Customers
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-zinc-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: '25%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#444748]">
                          Regular Customers
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-zinc-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#444748]">
                          New Customers
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-zinc-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: '15%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
