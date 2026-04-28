import {
  BellIcon,
  BoxIcon,
  ChevronDownIcon,
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
  StarIcon,
  UsersIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  MailIcon,
  PhoneIcon,
  UserPlusIcon,
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
  { label: 'Settings', icon: SettingsIcon, path: '/settings-u45-fabrica-admin' },
];

const topStats = [
  {
    label: 'TOTAL CUSTOMERS',
    value: '12,842',
    subtext: '+12% this month',
    positive: true,
  },
  {
    label: 'ACTIVE MEMBERS',
    value: '4,291',
    subtext: '33.4% engagement rate',
    positive: null,
  },
];

const bottomStats = [
  {
    label: 'AVERAGE ORDER VALUE',
    value: '$142.00',
    subtext: 'Stable since last quarter',
    positive: null,
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

const newRegistrations = {
  label: 'NEW REGISTRATIONS',
  value: '418',
  extra: '+415',
  avatars: [
    {
      src: 'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
      alt: 'Registration 1',
      fallback: 'A',
    },
    {
      src: 'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
      alt: 'Registration 2',
      fallback: 'B',
    },
    {
      src: 'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
      alt: 'Registration 3',
      fallback: 'C',
    },
  ],
};

export const CustomersFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/customers-u45-fabrica-admin';
  const [selectedTab, setSelectedTab] = useState('All Customers');
  const [sortBy, setSortBy] = useState('Most Recent');

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
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                    Customers
                  </h1>
                  <p className="text-base leading-[25.6px] text-[#444748]">
                    Manage customer relationships and analyze purchasing behavior
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
                    <UserPlusIcon className="mr-2 h-4 w-4" />
                    Add Customer
                  </Button>
                </div>
              </div>

              {/* All 4 stat cards in one horizontal row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Total Customers */}
                {topStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="rounded-xl border-[#e6e6e6] bg-white shadow-none"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-semibold tracking-[0.60px] text-[#444748] uppercase">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-3xl font-bold tracking-[-0.72px] text-black">
                          {stat.value}
                        </p>
                        <p className={`mt-1 text-sm ${stat.positive ? 'text-green-600' : 'text-[#444748]'}`}>
                          {stat.positive && <TrendingUpIcon className="inline h-3 w-3 mr-1" />}
                          {stat.subtext}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Average Order Value */}
                {bottomStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="rounded-xl border-[#e6e6e6] bg-white shadow-none"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-semibold tracking-[0.60px] text-[#444748] uppercase">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-3xl font-bold tracking-[-0.72px] text-black">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-[#444748]">
                          {stat.subtext}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* New Registrations - Dark Card */}
                <Card className="rounded-xl border-0 bg-[#18181B] shadow-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-semibold tracking-[0.60px] text-[#A1A1AA] uppercase">
                        {newRegistrations.label}
                      </p>
                      <p className="text-3xl font-bold tracking-[-0.72px] text-white">
                        {newRegistrations.value}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {newRegistrations.avatars.map((avatar, index) => (
                            <Avatar
                              key={avatar.alt}
                              className={`h-8 w-8 border-2 border-[#18181B] ${
                                index > 0 ? '-ml-2' : ''
                              }`}
                            >
                              <AvatarImage src={avatar.src} alt={avatar.alt} />
                              <AvatarFallback>{avatar.fallback}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <div className="-ml-2 flex h-8 items-center rounded-full bg-black px-3 text-xs font-semibold text-white">
                          +{newRegistrations.extra}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
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

                      <div className="relative">
                        <label className="text-xs font-medium text-[#444748] mr-2">Sort by:</label>
                        <div className="inline-flex items-center">
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none rounded-lg border border-[#c4c7c7] bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-[#1a1c1c] outline-none cursor-pointer"
                          >
                            <option>Most Recent</option>
                            <option>Name A-Z</option>
                            <option>Name Z-A</option>
                            <option>Most Orders</option>
                            <option>Highest Spent</option>
                          </select>
                          <ChevronDownIcon className="pointer-events-none -ml-6 h-4 w-4 text-[#444748]" />
                        </div>
                      </div>
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
                              <td className="py-4">
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

                <Card className="rounded-xl border-0 bg-[#18181B] shadow-none">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold leading-[31.2px] text-white mb-2">
                      Customer Segment Analysis
                    </h2>
                    <p className="text-sm text-[#A1A1AA] mb-5">
                      Identify your most profitable segments and automate targeted marketing campaigns.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Luxury Tier', 'Essential Buyers', 'Gifting Segment', 'New Signups'].map((segment) => (
                        <button
                          key={segment}
                          type="button"
                          className="rounded-full bg-[#27272A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3f3f46]"
                        >
                          {segment}
                        </button>
                      ))}
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
