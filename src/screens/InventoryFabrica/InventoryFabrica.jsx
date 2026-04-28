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
    AlertTriangleIcon,
    TruckIcon,
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

const inventoryStats = [
    { label: "Total Sold", value: "12,847", change: "+8.2%", positive: true },
    { label: "Low Stock", value: "23", change: "-12.5%", positive: false },
    { label: "Warehouse Utilization", value: "78%", change: "+5.3%", positive: true },
    { label: "Items in Transit", value: "156", change: "+18.7%", positive: true },
];

const inventoryItems = [
    {
        id: "WH001",
        name: "Nordic Hammer X1",
        sku: "NH-X1-BLK",
        category: "Tools",
        warehouse: "Warehouse A",
        committed: 45,
        available: 128,
        status: "In Stock",
    },
    {
        id: "WH002",
        name: "Minimalist Wool Coat",
        sku: "MW-COAT-GRY",
        category: "Apparel",
        warehouse: "Warehouse B",
        committed: 23,
        available: 12,
        status: "Low Stock",
    },
    {
        id: "WH003",
        name: "Ceramic Vase Set",
        sku: "CV-SET-WHT",
        category: "Home",
        warehouse: "Warehouse A",
        committed: 8,
        available: 67,
        status: "In Stock",
    },
    {
        id: "WH004",
        name: "Leather Backpack",
        sku: "LB-BPK-BRN",
        category: "Accessories",
        warehouse: "Warehouse C",
        committed: 34,
        available: 5,
        status: "Critical",
    },
    {
        id: "WH005",
        name: "Smart Watch Pro",
        sku: "SW-PRO-BLK",
        category: "Electronics",
        warehouse: "Warehouse B",
        committed: 67,
        available: 234,
        status: "In Stock",
    },
];

const statusColors = {
    "In Stock": "bg-green-100 text-green-800",
    "Low Stock": "bg-yellow-100 text-yellow-800",
    "Critical": "bg-red-100 text-red-800",
};

const warehouseData = [
    { name: "Warehouse A", percentage: 85, color: "bg-blue-600" },
    { name: "Warehouse B", percentage: 72, color: "bg-green-600" },
    { name: "Warehouse C", percentage: 68, color: "bg-purple-600" },
];

const stockActivity = [
    { time: "2 hours ago", action: "Low stock alert for Leather Backpack", type: "warning" },
    { time: "4 hours ago", action: "Shipment received: Nordic Hammer X1 (50 units)", type: "success" },
    { time: "6 hours ago", action: "Order fulfilled: Minimalist Wool Coat (5 units)", type: "info" },
    { time: "8 hours ago", action: "Inventory count completed for Warehouse A", type: "success" },
    { time: "12 hours ago", action: "Transfer initiated: Warehouse A to Warehouse C", type: "info" },
];

export const InventoryFabrica = () => {
    const navigate = useNavigate();
    const currentPath = "/inventory-u45-fabrica-admin";
    const [selectedWarehouse, setSelectedWarehouse] = useState("All");

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
                                    placeholder="Search inventory..."
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
                                    Inventory Management
                                </h1>
                                <p className="text-base leading-[25.6px] text-[#444748]">
                                    Monitor stock levels, warehouse capacity, and product availability
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {inventoryStats.map((stat) => (
                                    <Card key={stat.label} className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
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
                                                <div className={`flex items-center gap-1 text-xs font-medium ${
                                                    stat.positive ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                    <TrendingUpIcon className="h-3 w-3" />
                                                    {stat.change}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none lg:col-span-2">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                                <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Product Inventory
                                                </h2>
                                                <div className="flex items-center gap-4">
                                                    <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
                                                        <SelectTrigger className="w-40">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="All">All Warehouses</SelectItem>
                                                            <SelectItem value="Warehouse A">Warehouse A</SelectItem>
                                                            <SelectItem value="Warehouse B">Warehouse B</SelectItem>
                                                            <SelectItem value="Warehouse C">Warehouse C</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <Button
                                                        type="button"
                                                        className="h-auto rounded-lg bg-black px-4 py-2 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                                                    >
                                                        <PlusIcon className="mr-2 h-4 w-4" />
                                                        Add Item
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="overflow-x-auto">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="border-b border-zinc-200">
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Product Name
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                SKU
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Category
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Warehouse
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Committed
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Available
                                                            </th>
                                                            <th className="pb-3 text-left text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {inventoryItems.map((item) => (
                                                            <tr key={item.id} className="border-b border-zinc-100">
                                                                <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                                    {item.name}
                                                                </td>
                                                                <td className="py-4 text-sm text-[#444748]">
                                                                    {item.sku}
                                                                </td>
                                                                <td className="py-4 text-sm text-[#444748]">
                                                                    {item.category}
                                                                </td>
                                                                <td className="py-4 text-sm text-[#444748]">
                                                                    {item.warehouse}
                                                                </td>
                                                                <td className="py-4 text-sm text-[#444748]">
                                                                    {item.committed}
                                                                </td>
                                                                <td className="py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                                    {item.available}
                                                                </td>
                                                                <td className="py-4">
                                                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[item.status]}`}>
                                                                        {item.status}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="flex flex-col gap-6">
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="p-6">
                                            <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c] mb-4">
                                                Global Fulfillment Status
                                            </h2>
                                            <div className="space-y-4">
                                                {warehouseData.map((warehouse) => (
                                                    <div key={warehouse.name} className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-[#1a1c1c]">
                                                                {warehouse.name}
                                                            </span>
                                                            <span className="text-sm text-[#444748]">
                                                                {warehouse.percentage}%
                                                            </span>
                                                        </div>
                                                        <div className="w-full bg-zinc-200 rounded-full h-2">
                                                            <div
                                                                className={`${warehouse.color} h-2 rounded-full transition-all duration-300`}
                                                                style={{ width: `${warehouse.percentage}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <TruckIcon className="h-5 w-5 text-[#1a1c1c]" />
                                                <h2 className="text-xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Stock Activity
                                                </h2>
                                            </div>
                                            <div className="space-y-3">
                                                {stockActivity.map((activity, index) => (
                                                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-zinc-100 last:border-0">
                                                        <div className={`mt-1 h-2 w-2 rounded-full ${
                                                            activity.type === 'warning' ? 'bg-yellow-500' :
                                                            activity.type === 'success' ? 'bg-green-500' :
                                                            'bg-blue-500'
                                                        }`}></div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm text-[#1a1c1c] leading-5">
                                                                {activity.action}
                                                            </p>
                                                            <p className="text-xs text-[#444748] mt-1">
                                                                {activity.time}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
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
