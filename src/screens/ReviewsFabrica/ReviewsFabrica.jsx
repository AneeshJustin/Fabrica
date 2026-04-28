import {
  BellIcon,
  BoxIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleQuestionMark,
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
  FilterIcon,
  DownloadIcon,
  CheckIcon,
  ReplyIcon,
  TrashIcon,
  FlagIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';

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

const reviewStats = [
  {
    label: 'TOTAL REVIEWS',
    change: '+12% from last month',
    value: '1,284',
    positive: true,
  },
{
  label: 'AVERAGE RATING',
  value: 4.8,
  max: 5,
  changeText: 'Out of 5.0 stars',
  positive: true,
  icon: 'star',
},
  { label: 'PENDING APPROVAL', value: '24', change: null, positive: null, changeText: 'Requires attention', textColor: '#D97706' },
  { label: 'RESPONSE RATE', value: '94%', change: null, positive: null, changeText: 'Avg. response: 2.4 hrs' },
];

const reviews = [
  {
    id: 1,
    customer: 'Sarah Jenkins',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
    product: 'Nordic Hammer X1',
    rating: 5,
    date: '2024-04-15',
    review:
      'Absolutely love this hammer! Perfect balance and weight. The craftsmanship is exceptional.',
    status: 'pending',
    verified: true,
  },
  {
    id: 2,
    customer: 'Marcus Thorne',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
    product: 'Minimalist Wool Coat',
    rating: 4,
    date: '2024-04-14',
    review:
      'Great coat, very warm and stylish. Slightly bigger than expected but overall happy with the purchase.',
    status: 'published',
    verified: true,
  },
  {
    id: 3,
    customer: 'Elena Rodriguez',
    avatar:
      'https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png',
    product: 'Smart Watch Pro',
    rating: 5,
    date: '2024-04-13',
    review:
      "Best smartwatch I've ever owned! Battery life is amazing and all features work perfectly.",
    status: 'pending',
    verified: true,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export const ReviewsFabrica = () => {
  const navigate = useNavigate();
  const currentPath = '/reviews-u45-fabrica-admin';
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalReviews = Number.parseInt(
    reviewStats.find((stat) => stat.label === 'TOTAL REVIEWS')?.value.replace(/,/g, '') || '0',
    10,
  );
  const totalPages = Math.max(1, Math.ceil(totalReviews / pageSize));
  const showingStart = totalReviews > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const showingEnd = Math.min(currentPage * pageSize, totalReviews);
  const paginationPages = [...new Set([1, 2, 5, totalPages].filter((page) => page <= totalPages))];

  return (
    <div
      className="min-h-screen bg-[#f9f9f9] [font-family:'Manrope',Helvetica]"
      data-model-id="111:771"
    >
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-neutral-50 lg:flex lg:flex-col">
          <div className="p-4">
            <div className="flex flex-col items-start px-4 pb-8 pt-0">
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
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-zinc-400" />
                <Input
                  placeholder="Search reviews, products, or customers..."
                  className="pl-10 rounded-full h-10 bg-[#F4F4F5] border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Help">
                  <CircleQuestionMark className="h-4 w-4 text-zinc-600" />
                </Button>
                <span className="h-5 w-px bg-zinc-300" />
                <span className="text-md font-medium text-black">Profile</span>
              </div>
            </div>
          </header>
          <main className="flex-1 space-y-6 p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-zinc-900">
                  Customer Reviews
                </h1>
              </div>
              <div>
                <h1 className="text-md text-zinc-900">
                  Manage and respond to feedback across all product lines.
                </h1>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {reviewStats.map((stat) => (
                  <Card key={stat.label} className="border border-zinc-200 shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-zinc-500">
                            {stat.label}
                          </p>

                          <p className="text-2xl font-bold text-zinc-900">
                            {stat.value}
                          </p>

                          {stat.change && (
                            <div
                              className={`mt-1 flex items-center gap-1 text-sm ${
                                stat.positive
                                  ? 'text-green-600'
                                  : 'text-red-600'
                              }`}
                            >
                              {stat.positive ? (
                                <TrendingUpIcon className="h-4 w-4" />
                              ) : (
                                <TrendingDownIcon className="h-4 w-4" />
                              )}

                              <span>{stat.change}</span>
                            </div>
                          )}
                          {stat.changeText && !stat.change && (
                            <p 
                              className="mt-1 text-sm"
                              style={{ color: stat.textColor || '#71717a' }}
                            >
                              {stat.changeText}
                            </p>
                          )}
                        </div>

                        {stat.label === 'AVERAGE RATING' && (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card
                    key={review.id}
                    className={
                      review.status === 'published'
                        ? 'border-0 bg-[#FAFAFA]'
                        : review.status === 'pending'
                          ? 'border-0 bg-[#FFFFFF]'
                          : undefined
                    }
                  >
                    <CardContent className="relative p-6">
                      {review.status === 'pending' && (
                        <div className="absolute right-6 top-6 rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-semibold text-[#92400E]">
                          Pending approval
                        </div>
                      )}
                      {review.status === 'published' && (
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-[#E4E4E7] px-3 py-1 text-xs font-semibold text-zinc-700">
                          Published
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex min-w-0 items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>
                              {review.customer
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-zinc-900">
                                {review.customer}
                              </h3>
                            </div>
                            <p className="text-sm text-zinc-500">
                              {review.product} • {review.date}
                            </p>
                            <div className="mt-1">
                              <StarRating rating={review.rating} />
                            </div>
                            <p className="mt-2 text-zinc-700">
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="text-sm text-[#A1A1AA]">
                          {review.id === 1
                            ? 'October 24, 2023 • Verified Purchase'
                            : review.id === 3
                              ? 'October 20, 2023 • Verified Purchase'
                              : null}
                        </div>
                        <div className="flex justify-end gap-2">
                          {review.status === 'pending' && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 border-gray-300 text-[#52525B] shadow-none hover:bg-gray-100"
                              >
                                <TrashIcon className="h-4 w-4" />
                                Delete
                              </Button>

                              <Button
                                size="sm"
                                className="gap-2 bg-[#18181B] text-white border-0 shadow-none hover:bg-[#18181B]"
                              >
                                <CheckCircle className="h-4 w-4" />
                                Approve
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-500">
                  Showing {showingStart} to {showingEnd} of {totalReviews.toLocaleString()} reviews
                </p>
                <div className="flex items-center justify-center gap-2 bg-white p-2 text-[#52525B] sm:justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    aria-label="Previous page"
                    className="h-9 w-9 p-0 border-zinc-300 text-[#52525B] hover:bg-zinc-100"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  {paginationPages.map((page) => (
                    <Button
                      key={page}
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`border-zinc-300 text-[#52525B] hover:bg-zinc-100 ${
                        currentPage === page ? 'bg-zinc-100' : 'bg-white'
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    aria-label="Next page"
                    className="h-9 w-9 p-0 border-zinc-300 text-[#52525B] hover:bg-zinc-100"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};