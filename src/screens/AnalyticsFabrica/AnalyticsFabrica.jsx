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
    BarChart3Icon,
    TargetIcon,
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
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

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

const keyMetrics = [
    {
        label: "Total Revenue",
        value: "$142,850.00",
        change: "-12.9%",
        positive: false,
    },
    {
        label: "Active Orders",
        value: "1,482",
        change: "+8.2%",
        positive: true,
    },
    {
        label: "New Customers",
        value: "842",
        change: "+18.7%",
        positive: true,
    },
    {
        label: "Conversion Rate",
        value: "3.82%",
        change: "+2.4%",
        positive: true,
    },
];

const topProducts = [
    { name: "Nordic Hammer X1", sales: "$62.9k", growth: "+12.5%" },
    { name: "Minimalist Wool Coat", sales: "$45.2k", growth: "+8.3%" },
    { name: "Ceramic Vase Set", sales: "$38.7k", growth: "-2.1%" },
    { name: "Leather Backpack", sales: "$29.4k", growth: "+15.8%" },
    { name: "Smart Watch Pro", sales: "$24.8k", growth: "+5.2%" },
];

const customerMetrics = [
    { label: "Retention Rate", value: "78.4%", change: "+3.2%", positive: true },
    { label: "Avg. Order Value", value: "$154.20", change: "-2.4%", positive: false },
    { label: "Churn Risk", value: "12.5%", change: "-5.8%", positive: true },
];

export const AnalyticsFabrica = () => {
    const navigate = useNavigate();
    const currentPath = "/analytics-u45-fabrica-admin";
    const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

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
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                                    Analytics Overview
                                </h1>
                                <p className="text-base leading-[25.6px] text-[#444748]">
                                    Track performance metrics and business insights
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {keyMetrics.map((metric) => (
                                    <Card key={metric.label} className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-sm font-medium tracking-[0.28px] text-[#444748]">
                                                        {metric.label}
                                                    </p>
                                                    <p className="mt-2 text-3xl font-bold tracking-[-0.72px] text-black">
                                                        {metric.value}
                                                    </p>
                                                </div>
                                                <div className={`flex items-center gap-1 text-xs font-medium ${
                                                    metric.positive ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                    {metric.positive ? <TrendingUpIcon className="h-3 w-3" /> : <TrendingDownIcon className="h-3 w-3" />}
                                                    {metric.change}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-6">
                                        <BarChart3Icon className="h-5 w-5 text-[#1a1c1c]" />
                                        <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                            Revenue Trends
                                        </h2>
                                    </div>
                                    <div className="h-64 bg-[#f3f3f4] rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <BarChart3Icon className="h-12 w-12 text-[#444748] mx-auto mb-4" />
                                            <p className="text-[#444748]">Weekly performance comparison</p>
                                            <p className="text-sm text-[#444748] mt-2">Current vs Previous period</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-6">
                                            <TargetIcon className="h-5 w-5 text-[#1a1c1c]" />
                                            <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                Top Products
                                            </h2>
                                        </div>
                                        <div className="space-y-4">
                                            {topProducts.map((product, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-sm font-medium text-[#1a1c1c]">
                                                            {index + 1}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-[#1a1c1c]">
                                                                {product.name}
                                                            </p>
                                                            <p className="text-xs text-[#444748]">
                                                                {product.sales}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={`flex items-center gap-1 text-xs font-medium ${
                                                        product.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                        <TrendingUpIcon className="h-3 w-3" />
                                                        {product.growth}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-6">
                                            <UsersIcon className="h-5 w-5 text-[#1a1c1c]" />
                                            <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                Customer Growth & Loyalty
                                            </h2>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex flex-wrap gap-2">
                                                <ToggleGroup
                                                    type="single"
                                                    value={selectedPeriod}
                                                    onValueChange={(value) => {
                                                        if (value) setSelectedPeriod(value);
                                                    }}
                                                    className="justify-start"
                                                >
                                                    <ToggleGroupItem
                                                        value="Weekly"
                                                        className="h-auto rounded-lg px-4 py-2 text-sm font-medium tracking-[0.28px] data-[state=on]:bg-black data-[state=on]:text-white"
                                                    >
                                                        Weekly
                                                    </ToggleGroupItem>
                                                    <ToggleGroupItem
                                                        value="Monthly"
                                                        className="h-auto rounded-lg px-4 py-2 text-sm font-medium tracking-[0.28px] data-[state=on]:bg-black data-[state=on]:text-white"
                                                    >
                                                        Monthly
                                                    </ToggleGroupItem>
                                                    <ToggleGroupItem
                                                        value="Yearly"
                                                        className="h-auto rounded-lg px-4 py-2 text-sm font-medium tracking-[0.28px] data-[state=on]:bg-black data-[state=on]:text-white"
                                                    >
                                                        Yearly
                                                    </ToggleGroupItem>
                                                </ToggleGroup>
                                            </div>
                                            <div className="space-y-4">
                                                {customerMetrics.map((metric) => (
                                                    <div key={metric.label} className="flex items-center justify-between">
                                                        <div>
                                                            <p className="text-sm text-[#444748]">
                                                                {metric.label}
                                                            </p>
                                                            <p className="text-lg font-semibold text-[#1a1c1c]">
                                                                {metric.value}
                                                            </p>
                                                        </div>
                                                        <div className={`flex items-center gap-1 text-xs font-medium ${
                                                            metric.positive ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                            {metric.positive ? <TrendingUpIcon className="h-3 w-3" /> : <TrendingDownIcon className="h-3 w-3" />}
                                                            {metric.change}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button
                                                type="button"
                                                className="w-full h-auto rounded-lg bg-black px-6 py-3 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                                            >
                                                Launch Re-engagement Campaign
                                            </Button>
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
