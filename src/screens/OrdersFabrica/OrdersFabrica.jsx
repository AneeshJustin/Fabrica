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

const orderStats = [
    { label: "Total Orders", value: "1,284", change: null },
    { label: "Pending Shipment", value: "42", change: null },
    { label: "Completed Today", value: "156", change: null },
    { label: "Revenue Today", value: "$14,290", change: null },
];

const orders = [
    {
        id: "#FB-4921",
        customer: "Sean Jenkins",
        email: "sean@example.com",
        status: "Pending",
        payment: "Paid",
        amount: "$240.00",
    },
    {
        id: "#FB-4920",
        customer: "Emma Wilson",
        email: "emma@example.com",
        status: "Shipped",
        payment: "Paid",
        amount: "$1,350.00",
    },
    {
        id: "#FB-4919",
        customer: "Michael Chen",
        email: "michael@example.com",
        status: "Delivered",
        payment: "Paid",
        amount: "$89.99",
    },
    {
        id: "#FB-4918",
        customer: "Sarah Johnson",
        email: "sarah@example.com",
        status: "Pending",
        payment: "Processing",
        amount: "$456.50",
    },
    {
        id: "#FB-4917",
        customer: "David Kim",
        email: "david@example.com",
        status: "Shipped",
        payment: "Paid",
        amount: "$234.00",
    },
];

const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
};

const paymentColors = {
    Paid: "bg-green-100 text-green-800",
    Processing: "bg-yellow-100 text-yellow-800",
};

export const OrdersFabrica = () => {
    const navigate = useNavigate();
    const currentPath = "/orders-u45-fabrica-admin";
    const [selectedFilter, setSelectedFilter] = useState("All");

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
                                    placeholder="Search orders..."
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
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                                        Orders
                                    </h1>
                                    <p className="mt-2 text-base leading-[25.6px] text-[#444748]">
                                        Manage and track all customer orders
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-auto rounded-lg border-[#c4c7c7] px-6 py-3 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]"
                                    >
                                        <DownloadIcon className="mr-2 h-4 w-4" />
                                        Export
                                    </Button>
                                    <Button
                                        type="button"
                                        className="h-auto rounded-lg bg-black px-6 py-3 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                                    >
                                        <PlusIcon className="mr-2 h-4 w-4" />
                                        Create New Order
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {orderStats.map((stat) => (
                                    <Card key={stat.label} className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="p-6">
                                            <p className="text-sm font-medium tracking-[0.28px] text-[#444748]">
                                                {stat.label}
                                            </p>
                                            <p className="mt-2 text-3xl font-bold tracking-[-0.72px] text-black">
                                                {stat.value}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {["All", "Pending", "Shipped", "Delivered"].map((filter) => (
                                                <Button
                                                    key={filter}
                                                    type="button"
                                                    variant={selectedFilter === filter ? "default" : "outline"}
                                                    className={`h-auto rounded-lg px-4 py-2 text-sm font-medium tracking-[0.28px] ${
                                                        selectedFilter === filter
                                                            ? "bg-black text-white hover:bg-black/90"
                                                            : "border-[#c4c7c7] text-[#1a1c1c] hover:bg-zinc-100"
                                                    }`}
                                                    onClick={() => setSelectedFilter(filter)}
                                                >
                                                    {filter}
                                                </Button>
                                            ))}
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="h-auto rounded-lg border-[#c4c7c7] px-4 py-2 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]"
                                        >
                                            <FilterIcon className="mr-2 h-4 w-4" />
                                            Filter
                                        </Button>
                                    </div>

                                    <div className="mt-6 overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-zinc-200">
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        ORDER ID
                                                    </th>
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        CUSTOMER
                                                    </th>
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        STATUS
                                                    </th>
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        PAYMENT
                                                    </th>
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        AMOUNT
                                                    </th>
                                                    <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                        ACTION
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order.id} className="border-b border-zinc-100">
                                                        <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                            {order.id}
                                                        </td>
                                                        <td className="py-4">
                                                            <div>
                                                                <p className="text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                                    {order.customer}
                                                                </p>
                                                                <p className="text-xs text-[#444748]">
                                                                    {order.email}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="py-4">
                                                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[order.status]}`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-4">
                                                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${paymentColors[order.payment]}`}>
                                                                {order.payment}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                            {order.amount}
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

                                    <div className="mt-6 flex items-center justify-between">
                                        <p className="text-sm text-[#444748]">
                                            Showing 1-10 of 1284 orders
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
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
