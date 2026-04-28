import {
  BellIcon,
  BoxIcon,
  ChevronLeftIcon,
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
  PencilIcon,
  Trash2Icon,
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
import campaignImage from '../../assets/11.png';

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
    type: 'PERCENTAGE',
    value: '30% OFF',
    expiration: 'Oct 24, 2024',
    active: true,
    usage: '4,112 Redemptions',
    updatedAgo: 'Updated 3h ago',
  },
  {
    code: 'WELCOME50',
    type: 'FLAT AMOUNT',
    value: '$50 OFF',
    expiration: 'No expiry date',
    active: false,
    usage: '1,890 Redemptions',
    updatedAgo: 'Updated 4d ago',
  },
  {
    code: 'LOYALTY10',
    type: 'PERCENTAGE',
    value: '10% OFF',
    expiration: 'Dec 31, 2024',
    active: true,
    usage: '2,145 Redemptions',
    updatedAgo: 'Updated 1w ago',
  },
  {
    code: 'REF-25',
    type: 'FLAT AMOUNT',
    value: '$25 OFF',
    expiration: 'No expiry date',
    active: true,
    usage: '780 Redemptions',
    updatedAgo: 'Updated 8h ago',
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
                  className="h-11 rounded-full border-0 bg-[#eeeeee] pl-11 text-sm text-gray-500 placeholder:text-gray-500 shadow-none outline-none ring-0 focus:ring-0 focus:outline-none"
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                      Discounts
                    </h1>
                    <p className="text-base leading-[25.6px] text-[#444748]">
                      Manage promotional codes and special offers accross the store.
                    </p>
                  </div>
                  <Button
                    type="button"
                    className="h-9 shrink-0 rounded-md bg-black px-4 text-xs font-medium text-white hover:bg-black/90"
                  >
                    <PlusIcon className="mr-1.5 h-3.5 w-3.5" />
                    Create Discount
                  </Button>
                </div>
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
                            placeholder="e.g. SUMMER24"
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

                      <div className="flex items-center justify-between rounded-lg border-0 bg-[#FAFAFA] border-zinc-300 px-4 py-3">
                        <label className="text-sm font-medium text-[#1a1c1c]">
                          Active Status
                          <p className="text-xs text-[#444748]">
                            Enable code immediately
                          </p>
                        </label>
                        <div className="flex items-center gap-2">
                  
                          <Switch
                            checked={isActive}
                            onCheckedChange={setIsActive}
                            className="h-7 w-12 border-0 bg-zinc-300 p-0.5 data-[state=checked]:bg-black data-[state=unchecked]:bg-zinc-300 [&>span]:h-6 [&>span]:w-6 [&>span]:border-2 [&>span]:border-black [&>span]:bg-white [&>span]:data-[state=checked]:translate-x-5 [&>span]:data-[state=unchecked]:translate-x-0"
                          />
                        </div>
                      </div>

                      <Button
                        type="button"
                        className="w-full h-12 rounded-lg bg-black px-6 py-3 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                      >
                        Generate Discount Code
                      </Button>

                      <Card className="rounded-lg border-[#e6e6e6] bg-[#f3f3f4] p-4">
                        <div className="flex items-start gap-3">
                      
                          <div>
                            <p className="text-sm font-semibold text-[#1a1c1c]">
                              Campaign Tip
                            </p>
                            <p className="text-xs text-[#444748] mt-1">
                            Limited-time offers typically see 45% higher
                            conversion rates. Set an expiration date for FOMO.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-0 bg-transparent shadow-none">
                    <CardContent className="p-8">
                      
                      <div className="grid gap-4 md:grid-cols-2 -mt-8">
                        {discountCoupons.slice(0, 2).map((coupon) => (
                          <Card
                            key={coupon.code}
                            className="relative overflow-hidden rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-4 shadow-none"
                          >
                            <div
                              className={`absolute inset-x-0 top-0 h-1 ${
                                coupon.type === 'FLAT AMOUNT' ? 'bg-[#A1A1AA]' : 'bg-[#18181B]'
                              }`}
                            />
                            <div className="space-y-4">
                              <div className="flex items-start justify-between">
                                <span
                                  className={`rounded px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.5px] text-white ${
                                    coupon.type === 'FLAT AMOUNT' && coupon.code !== 'REF-25'
                                      ? 'bg-zinc-500'
                                      : 'bg-black'
                                  }`}
                                >
                                  {coupon.type}
                                </span>
                                <div className="flex items-center gap-2 text-zinc-400">
                                  <PencilIcon className="h-3 w-3" />
                                  <Trash2Icon className="h-3 w-3" />
                                </div>
                              </div>
                              <div>
                                <p className="text-xl font-semibold text-[#1a1c1c]">
                                  {coupon.code}
                                </p>
                                <p className="text-2xl font-bold text-black">
                                  {coupon.value}
                                </p>
                                <p className="flex items-center gap-1 text-xs text-[#71717A]">
                                  <CalendarIcon className="h-3 w-3" />
                                  Expires: {coupon.expiration}
                                </p>
                                <p className="mt-1 flex items-center gap-1 text-xs text-[#71717A]">
                                  <UsersIcon className="h-3 w-3" />
                                  {coupon.usage}
                                </p>
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-[#A1A1AA]">
                                <span
                                  className={`flex items-center gap-1 ${
                                    coupon.active ? 'text-emerald-600' : 'text-zinc-400'
                                  }`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                      coupon.active ? 'bg-emerald-500' : 'bg-zinc-400'
                                    }`}
                                  />
                                  {coupon.active ? 'ACTIVE' : 'INACTIVE'}
                                </span>
                                <span>{coupon.updatedAgo}</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                        <Card className="md:col-span-2 rounded-lg border-0 bg-[#111217] p-4 shadow-none">
                          <div className="flex items-center justify-between gap-4">
                            <div className="max-w-[60%]">
                              <p className="text-[9px] font-semibold uppercase tracking-[1px] text-zinc-400">
                                Special Campaign
                              </p>
                              <h3 className="mt-2 text-4xl font-semibold leading-none text-white">
                                Black Friday
                                <br />
                                Prep.
                              </h3>
                              <p className="mt-3 text-xs text-zinc-400">
                                Automate your holiday discounts. Set triggers for
                                volume-based pricing and member-only early access.
                              </p>
                              <Button
                                type="button"
                                className="mt-4 h-8 rounded-md bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
                              >
                                Configure Event
                              </Button>
                            </div>
                            <img
                              src={campaignImage}
                              alt="Black Friday campaign"
                              className="h-24 w-44 rounded border border-zinc-600 object-cover"
                            />
                          </div>
                        </Card>
                        {discountCoupons.slice(2, 4).map((coupon) => (
                          <Card
                            key={coupon.code}
                            className="relative overflow-hidden rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-4 shadow-none"
                          >
                            <div
                              className={`absolute inset-x-0 top-0 h-1 ${
                                coupon.type === 'FLAT AMOUNT' ? 'bg-[#A1A1AA]' : 'bg-[#18181B]'
                              }`}
                            />
                            <div className="space-y-4">
                              <div className="flex items-start justify-between">
                                <span
                                  className={`rounded px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.5px] text-white ${
                                    coupon.type === 'FLAT AMOUNT' && coupon.code !== 'REF-25'
                                      ? 'bg-zinc-500'
                                      : 'bg-black'
                                  }`}
                                >
                                  {coupon.type}
                                </span>
                                <div className="flex items-center gap-2 text-zinc-400">
                                  <PencilIcon className="h-3 w-3" />
                                  <Trash2Icon className="h-3 w-3" />
                                </div>
                              </div>
                              <div>
                                <p className="text-xl font-semibold text-[#1a1c1c]">
                                  {coupon.code}
                                </p>
                                <p className="text-2xl font-bold text-black">
                                  {coupon.value}
                                </p>
                                <p className="flex items-center gap-1 text-xs text-[#71717A]">
                                  <CalendarIcon className="h-3 w-3" />
                                  Expires: {coupon.expiration}
                                </p>
                                <p className="mt-1 flex items-center gap-1 text-xs text-[#71717A]">
                                  <UsersIcon className="h-3 w-3" />
                                  {coupon.usage}
                                </p>
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-[#A1A1AA]">
                                <span
                                  className={`flex items-center gap-1 ${
                                    coupon.active ? 'text-emerald-600' : 'text-zinc-400'
                                  }`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                      coupon.active ? 'bg-emerald-500' : 'bg-zinc-400'
                                    }`}
                                  />
                                  {coupon.active ? 'ACTIVE' : 'INACTIVE'}
                                </span>
                                <span>{coupon.updatedAgo}</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm text-[#71717A]">
                          Showing 6 of 26 Discounts
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 border-zinc-200 text-zinc-500"
                            aria-label="Previous discounts"
                          >
                            <ChevronLeftIcon className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 border-zinc-200 text-zinc-500"
                            aria-label="Next discounts"
                          >
                            <ChevronRightIcon className="h-3.5 w-3.5" />
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