import {
  BellIcon,
  BoxIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  LockIcon,
  LogOutIcon,
  PackageIcon,
  PercentIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  StoreIcon,
  TruckIcon,
  UsersIcon,
  CreditCardIcon,
  PlusIcon,
  FileTextIcon,
  KeyIcon,
  DownloadIcon,
  CheckIcon,
  PackageOpenIcon,
  LeafIcon,
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

const deliveryOptions = [
  {
    id: 'express',
    label: 'Express',
    sublabel: '1-2 Days',
    icon: TruckIcon,
    defaultChecked: true,
  },
  {
    id: 'standard',
    label: 'Standard Shipping',
    sublabel: '3-5 Business Days',
    icon: PackageIcon,
    defaultChecked: true,
  },
  {
    id: 'carbon-neutral',
    label: 'Carbon Neutral',
    sublabel: 'Eco-Friendly Delivery',
    icon: LeafIcon,
    defaultChecked: false,
  },
];

export const SettingsFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/settings-u45-fabrica-admin';
  const [storeName, setStoreName] = useState('Fabrica Global');
  const [website, setWebsite] = useState('https://fabrica.com');
  const [storeDesc, setStoreDesc] = useState(
    'Premium, functional, driven e-commerce experience focusing on high-quality essentials.'
  );
  const [checkedDelivery, setCheckedDelivery] = useState({
    express: true,
    standard: true,
    'carbon-neutral': false,
  });

  const toggleDelivery = (id) => {
    setCheckedDelivery((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className="min-h-screen bg-[#f9f9f9] [font-family:'Manrope',Helvetica]"
      data-model-id="settings"
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
                  placeholder="Search settings..."
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
                  <HelpCircleIcon className="h-5 w-5" />
                </Button>
                <div className="h-8 w-px bg-zinc-200" />
                <button type="button" className="flex items-center gap-3">
                  <span className="text-sm font-semibold leading-5 text-zinc-900">
                    Profile
                  </span>
                  <Avatar className="h-8 w-8 rounded-full border">
                    <AvatarImage
                      src="https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png"
                      alt="Admin"
                    />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 p-4 sm:p-6 lg:p-8">
              {/* Page Header */}
              <div>
                <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                  Settings
                </h1>
                <p className="mt-2 text-base leading-[25.6px] text-[#444748]">
                  Manage your store preferences, payment configurations, and administrative details.
                </p>
              </div>

              {/* Store Information + Admin Profile Row */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                {/* Store Information */}
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none lg:col-span-3">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <StoreIcon className="h-5 w-5 text-[#444748]" />
                      <h2 className="text-lg font-semibold text-[#1a1c1c]">
                        Store Information
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[#444748]">
                          Store Name
                        </label>
                        <Input
                          value={storeName}
                          onChange={(e) => setStoreName(e.target.value)}
                          className="h-10 rounded-lg border-zinc-200 text-sm text-[#1a1c1c]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[#444748]">
                          Official Website
                        </label>
                        <Input
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          className="h-10 rounded-lg border-zinc-200 text-sm text-[#1a1c1c]"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#444748]">
                        Store Description
                      </label>
                      <textarea
                        value={storeDesc}
                        onChange={(e) => setStoreDesc(e.target.value)}
                        rows={3}
                        className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-[#1a1c1c] outline-none resize-none focus:border-zinc-400"
                      />
                    </div>
                    <div className="mt-5 flex justify-end">
                      <Button
                        type="button"
                        className="h-10 rounded-lg bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Admin Profile Card */}
                <Card className="rounded-xl border-0 bg-[#18181B] shadow-none lg:col-span-2">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <Avatar className="h-20 w-20 rounded-full border-4 border-[#27272A]">
                      <AvatarImage
                        src="https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png"
                        alt="Alex Thorne"
                      />
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      Alex Thorne
                    </h3>
                    <p className="text-sm text-[#A1A1AA]">
                      Senior Administrator
                    </p>
                    <div className="mt-6 flex w-full flex-col gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-10 w-full rounded-lg border-[#3f3f46] bg-transparent text-sm font-medium text-white hover:bg-[#27272A] hover:text-white"
                      >
                        <SettingsIcon className="mr-2 h-4 w-4" />
                        Manage Credentials
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-10 w-full rounded-lg border-[#3f3f46] bg-transparent text-sm font-medium text-white hover:bg-[#27272A] hover:text-white"
                      >
                        <LogOutIcon className="mr-2 h-4 w-4" />
                        Logout Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Delivery Options + Payment Settings Row */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Delivery Options */}
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <TruckIcon className="h-5 w-5 text-[#444748]" />
                      <h2 className="text-lg font-semibold text-[#1a1c1c]">
                        Delivery Options
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                      {deliveryOptions.map((option) => {
                        const Icon = option.icon;
                        const isChecked = checkedDelivery[option.id];
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => toggleDelivery(option.id)}
                            className={`flex items-center justify-between rounded-lg border px-4 py-3.5 transition-colors ${
                              isChecked
                                ? 'border-zinc-300 bg-white'
                                : 'border-zinc-200 bg-[#fafafa]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`h-5 w-5 ${isChecked ? 'text-[#1a1c1c]' : 'text-zinc-400'}`} />
                              <div className="text-left">
                                <p className={`text-sm font-medium ${isChecked ? 'text-[#1a1c1c]' : 'text-zinc-400'}`}>
                                  {option.label}
                                </p>
                                <p className="text-xs text-[#A1A1AA]">
                                  {option.sublabel}
                                </p>
                              </div>
                            </div>
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded ${
                                isChecked
                                  ? 'bg-[#18181B]'
                                  : 'border border-zinc-300 bg-white'
                              }`}
                            >
                              {isChecked && (
                                <CheckIcon className="h-3.5 w-3.5 text-white" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Settings */}
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCardIcon className="h-5 w-5 text-[#444748]" />
                      <h2 className="text-lg font-semibold text-[#1a1c1c]">
                        Payment Settings
                      </h2>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-5">
                      <label className="text-xs font-semibold text-[#444748]">
                        Default Currency
                      </label>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-lg border border-zinc-200 bg-white py-2.5 pl-3 pr-10 text-sm font-medium text-[#1a1c1c] outline-none cursor-pointer">
                          <option>USD - US Dollar ($)</option>
                          <option>EUR - Euro (€)</option>
                          <option>GBP - British Pound (£)</option>
                          <option>INR - Indian Rupee (₹)</option>
                        </select>
                        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#444748]" />
                      </div>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-[#1a1c1c]">
                          Connected Accounts
                        </span>
                        <button
                          type="button"
                          className="text-xs font-semibold text-[#1a1c1c] hover:underline"
                        >
                          Add New
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#635bff]">
                            <span className="text-xs font-bold text-white">S</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1a1c1c]">
                              Stripe Connect
                            </p>
                            <p className="text-xs text-[#A1A1AA]">
                              Connected May 2024
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Data & Security */}
              <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <ShieldIcon className="h-5 w-5 text-[#444748]" />
                      <h2 className="text-lg font-semibold text-[#1a1c1c]">
                        Data & Security
                      </h2>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-9 rounded-lg border-zinc-200 px-4 text-xs font-semibold text-[#444748] hover:bg-zinc-50"
                    >
                      <LockIcon className="mr-1.5 h-3.5 w-3.5" />
                      Encrypt
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex flex-col gap-2 rounded-lg border border-zinc-100 p-4">
                      <FileTextIcon className="h-5 w-5 text-[#444748]" />
                      <h3 className="text-sm font-semibold text-[#1a1c1c]">
                        Audit Logs
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-4">
                        Monitor all administrator activities and system changes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border border-zinc-100 p-4">
                      <KeyIcon className="h-5 w-5 text-[#444748]" />
                      <h3 className="text-sm font-semibold text-[#1a1c1c]">
                        API Keys
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-4">
                        Manage external integration tokens and webhooks.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border border-zinc-100 p-4">
                      <DownloadIcon className="h-5 w-5 text-[#444748]" />
                      <h3 className="text-sm font-semibold text-[#1a1c1c]">
                        Data Export
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-4">
                        Download store data in CSV or JSON format.
                      </p>
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
