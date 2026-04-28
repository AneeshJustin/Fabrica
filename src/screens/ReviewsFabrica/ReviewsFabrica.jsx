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
    FilterIcon,
    DownloadIcon,
    CheckIcon,
    ReplyIcon,
    TrashIcon,
    FlagIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";

const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboardIcon, path: "/dashboard-home-u45-fabrica-admin" },
    { label: "Products", icon: PackageIcon, path: "/products-u45-fabrica-admin" },
    { label: "Orders", icon: ShoppingCartIcon, path: "/orders-u45-fabrica-admin" },
    { label: "Customers", icon: UsersIcon, path: "/customers-u45-fabrica-admin" },
    { label: "Inventory", icon: BoxIcon, path: "/inventory-u45-fabrica-admin" },
    { label: "Analytics", icon: PercentIcon, path: "/analytics-u45-fabrica-admin" },
    { label: "Discounts", icon: ShoppingBagIcon, path: "/discounts-u45-fabrica-admin" },
    { label: "Reviews", icon: StarIcon, path: "/reviews-u45-fabrica-admin" },
    { label: "Settings", icon: SettingsIcon, path: "#" },
];

const reviewStats = [
    { label: "Total Reviews", value: "1,284", change: null, positive: null },
    { label: "Average Rating", value: "4.8", change: null, positive: null },
    { label: "Reviews Approval", value: "24", change: null, positive: null },
    { label: "Approval Rate", value: "94%", change: null, positive: null },
];

const reviews = [
    {
        id: 1,
        customer: "Sarah Jenkins",
        avatar: "https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png",
        product: "Nordic Hammer X1",
        rating: 5,
        date: "2024-04-15",
        review: "Absolutely love this hammer! Perfect balance and weight. The craftsmanship is exceptional.",
        status: "published",
        verified: true,
    },
    {
        id: 2,
        customer: "Marcus Thorne",
        avatar: "https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png",
        product: "Minimalist Wool Coat",
        rating: 4,
        date: "2024-04-14",
        review: "Great coat, very warm and stylish. Slightly bigger than expected but overall happy with the purchase.",
        status: "published",
        verified: true,
    },
    {
        id: 3,
        customer: "Elena Rodriguez",
        avatar: "https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png",
        product: "Smart Watch Pro",
        rating: 5,
        date: "2024-04-13",
        review: "Best smartwatch I've ever owned! Battery life is amazing and all features work perfectly.",
        status: "pending",
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
                        star <= rating ? "text-yellow-500 fill-current" : "text-gray-300"
                    }`}
                />
            ))}
        </div>
    );
};

export const ReviewsFabrica = () => {
    const navigate = useNavigate();
    const currentPath = "/reviews-u45-fabrica-admin";
    const [selectedFilter, setSelectedFilter] = useState("All");

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
                                        onClick={() => item.path !== "#" && navigate(item.path)}
                                        className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left transition-colors ${isActive
                                                ? "bg-zinc-900 text-white"
                                                : "text-zinc-500 hover:bg-zinc-100"
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
                                    placeholder="Search reviews..."
                                    className="pl-10"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="icon" className="relative">
                                    <BellIcon className="h-4 w-4" />
                                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                                </Button>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://c.animaapp.com/moiaal67fUcb10/img/ab6axudujliuhmsfz-kml2eff3xzw8jhaqg4shdysrflycmnxnkkwtupe-op05ir.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 space-y-6 p-6">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl font-bold text-zinc-900">Customer Reviews</h1>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {reviewStats.map((stat) => (
                                    <Card key={stat.label}>
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-zinc-500">
                                                        {stat.label}
                                                    </p>
                                                    <p className="text-2xl font-bold text-zinc-900">
                                                        {stat.value}
                                                    </p>
                                                </div>
                                                <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                                    <StarIcon className="h-4 w-4 text-zinc-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="space-y-4">
                                {reviews.map((review) => (
                                    <Card key={review.id}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src={review.avatar} />
                                                        <AvatarFallback>
                                                            {review.customer.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="font-semibold text-zinc-900">
                                                                {review.customer}
                                                            </h3>
                                                            {review.verified && (
                                                                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                                                    <CheckIcon className="h-3 w-3" />
                                                                    Verified
                                                                </div>
                                                            )}
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
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="sm" className="gap-2">
                                                        Edit
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="gap-2">
                                                        Decline
                                                    </Button>
                                                    <Button size="sm" className="gap-2 bg-black text-white hover:bg-black">
                                                        Approve
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Button variant="outline" size="sm">1</Button>
                                <Button variant="outline" size="sm">2</Button>
                                <Button variant="outline" size="sm">5</Button>
                                <Button variant="outline" size="sm">128</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
