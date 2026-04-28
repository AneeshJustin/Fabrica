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
  RefreshCwIcon,
  CalendarIcon,
  SparklesIcon,
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
import { Switch } from '../../components/ui/switch';
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
  { label: 'Settings', icon: SettingsIcon, path: '#' },
];

const discountCoupons = [
  {
    code: 'SPRING30',
    type: 'percentage',
    value: '30% OFF',
    expiration: '2024-06-30',
    active: true,
    usage: '234 uses',
  },
  {
    code: 'WELCOME50',
    type: 'value',
    value: '$50 OFF',
    expiration: '2024-12-31',
    active: true,
    usage: '156 uses',
  },
  {
    code: 'LOYALTY10',
    type: 'percentage',
    value: '10% OFF',
    expiration: '2024-08-15',
    active: true,
    usage: '89 uses',
  },
  {
    code: 'REF-25',
    type: 'value',
    value: '$25 OFF',
    expiration: '2024-07-20',
    active: false,
    usage: '45 uses',
  },
  {
    code: 'SUMMER20',
    type: 'percentage',
    value: '20% OFF',
    expiration: '2024-09-01',
    active: true,
    usage: '178 uses',
  },
];

export const DiscountsFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/discounts-u45-fabrica-admin';
  const [couponCode, setCouponCode] = useState('');
  const [discountType, setDiscountType] = useState('percentage');
  const [discountValue, setDiscountValue] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [isActive, setIsActive] = useState(true);

  const generateCouponCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponCode(code);
  };

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
                  placeholder="Search discounts..."
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
                  Discounts & Coupons
                </h1>
                <p className="text-base leading-[25.6px] text-[#444748]">
                  Create and manage promotional discounts and coupon codes
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c] mb-6">
                      Create Coupon
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                          COUPON CODE
                        </label>
                        <div className="flex gap-2">
                          <Input
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter coupon code"
                            className="h-12 rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c] placeholder:text-gray-500"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={generateCouponCode}
                            className="h-12 rounded-lg border-[#c4c7c7] px-4"
                          >
                            <RefreshCwIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                            TYPE
                          </label>
                          <Select
                            value={discountType}
                            onValueChange={setDiscountType}
                          >
                            <SelectTrigger className="h-12 rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="percentage">
                                Percentage
                              </SelectItem>
                              <SelectItem value="value">Value</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                            VALUE
                          </label>
                          <Input
                            value={discountValue}
                            onChange={(e) => setDiscountValue(e.target.value)}
                            placeholder={
                              discountType === 'percentage' ? '10%' : '$50'
                            }
                            className="h-12 rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c] placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                          EXPIRATION DATE
                        </label>
                        <div className="relative">
                          <CalendarIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                          <Input
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            type="date"
                            className="h-12 rounded-lg border-0 bg-[#f3f3f4] pl-11 text-base text-[#1a1c1c] placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-[#1a1c1c]">
                          Active
                        </label>
                        <Switch
                          checked={isActive}
                          onCheckedChange={setIsActive}
                        />
                      </div>

                      <Button
                        type="button"
                        className="w-full h-12 rounded-lg bg-black px-6 py-3 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                      >
                        Generate Discount Code
                      </Button>

                      <Card className="rounded-lg border-[#e6e6e6] bg-[#f3f3f4] p-4">
                        <div className="flex items-start gap-3">
                          <SparklesIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-[#1a1c1c]">
                              Campaign Tip
                            </p>
                            <p className="text-xs text-[#444748] mt-1">
                              Create urgency by setting expiration dates within
                              7-14 days for maximum conversion.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                          Active Discounts
                        </h2>
                        <span className="text-sm text-[#444748]">
                          Showing 1-10 of 26 discounts
                        </span>
                      </div>
                      <div className="space-y-4">
                        {discountCoupons.map((coupon) => (
                          <Card
                            key={coupon.code}
                            className="rounded-lg border-[#e6e6e6] bg-white p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                  <PercentIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-semibold text-[#1a1c1c]">
                                    {coupon.code}
                                  </p>
                                  <p className="text-lg font-bold text-black">
                                    {coupon.value}
                                  </p>
                                  <p className="text-xs text-[#444748]">
                                    Expires: {coupon.expiration} •{' '}
                                    {coupon.usage}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Switch checked={coupon.active} />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  className="h-auto p-0 text-zinc-700 hover:bg-transparent"
                                >
                                  <ChevronRightIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <SparklesIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#1a1c1c]">
                            Black Friday Prep.
                          </h3>
                          <p className="text-sm text-[#444748] mb-3">
                            Prepare your biggest sale event of the year
                          </p>
                          <Button
                            type="button"
                            className="h-auto rounded-lg bg-black px-4 py-2 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                          >
                            Configure Event
                          </Button>
                        </div>
                      </div>
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
