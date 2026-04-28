import {
    BellIcon,
    BoxIcon,
    CheckIcon,
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
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui/avatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Textarea } from "../../components/ui/textarea";
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

const pricingFields = [
    { label: "BASE PRICE ($)", placeholder: "0.00" },
    { label: "DISCOUNT (%)", placeholder: "0" },
    { label: "STOCK QUANTITY", placeholder: "0" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const swatches = [
    { name: "Ink", className: "bg-zinc-900", selected: true },
    {
        name: "Light",
        className: "bg-gray-100 border border-zinc-200",
        selected: false,
    },
    { name: "Sand", className: "bg-[#c2b2a9]", selected: false },
    { name: "Slate", className: "bg-[#4a5568]", selected: false },
];

export const AddProductFabrica = () => {
    const navigate = useNavigate();
    const currentPath = "/add-product-u45-fabrica-admin";
    const [selectedSize, setSelectedSize] = useState("S");

    return (
        <div
            className="min-h-screen bg-[#f9f9f9] [font-family:'Manrope',Helvetica]"
            data-model-id="111:1067"
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
                                const isActive = currentPath === item.path || (item.path === "/products-u45-fabrica-admin" && currentPath === "/add-product-u45-fabrica-admin");
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
                                    placeholder="SearchIcon products..."
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
                        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 p-4 sm:p-6 lg:p-12">
                            <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                <div className="flex flex-col gap-[6.8px]">
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink className="[font-family:'Manrope',Helvetica] text-sm font-medium tracking-[0.28px] text-[#464747]">
                                                    Products
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator>
                                                <ChevronRightIcon className="h-4 w-4 text-[#464747]" />
                                            </BreadcrumbSeparator>
                                            <BreadcrumbItem>
                                                <BreadcrumbPage className="[font-family:'Manrope',Helvetica] text-sm font-medium tracking-[0.28px] text-[#464747]">
                                                    New Product
                                                </BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                    <div className="pt-[8.2px]">
                                        <h1 className="text-4xl font-bold tracking-[-0.96px] text-black sm:text-5xl sm:leading-[52.8px]">
                                            Add New Product
                                        </h1>
                                    </div>
                                    <p className="max-w-lg text-base leading-[25.6px] text-[#444748]">
                                        Fill in the information below to create a new product in the
                                        Fabrica
                                        <br />
                                        catalogue.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-auto rounded-lg border-[#c4c7c7] px-8 py-3 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]"
                                    >
                                        Discard Draft
                                    </Button>
                                    <Button
                                        type="button"
                                        className="h-auto rounded-lg bg-black px-8 py-3 text-sm font-medium tracking-[0.28px] text-white hover:bg-black/90"
                                    >
                                        Save Product
                                    </Button>
                                </div>
                            </section>
                            <section className="grid grid-cols-1 gap-8 xl:grid-cols-12">
                                <div className="flex flex-col gap-8 xl:col-span-8">
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-[31px] p-8">
                                            <section className="space-y-[23px]">
                                                <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    General Information
                                                </h2>
                                                <div className="space-y-[23px]">
                                                    <div className="space-y-[8.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            PRODUCT NAME
                                                        </label>
                                                        <Input
                                                            defaultValue=""
                                                            placeholder="e.g. Minimalist Wool Overcoat"
                                                            className="h-[58px] rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c] placeholder:text-gray-500"
                                                        />
                                                    </div>
                                                    <div className="space-y-[8.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            DESCRIPTION
                                                        </label>
                                                        <Textarea
                                                            defaultValue=""
                                                            placeholder="Describe the craftsmanship, materials, and fit..."
                                                            className="min-h-[185px] rounded-lg border-0 bg-[#f3f3f4] px-4 py-[15px] text-base leading-[25.6px] text-[#1a1c1c] placeholder:text-gray-500 resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </section>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-8 p-8">
                                            <section className="space-y-8">
                                                <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Pricing &amp; Inventory
                                                </h2>
                                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                                    {pricingFields.map((field) => (
                                                        <div key={field.label} className="space-y-[8.39px]">
                                                            <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                                {field.label}
                                                            </label>
                                                            <Input
                                                                defaultValue=""
                                                                placeholder={field.placeholder}
                                                                className="h-[57.59px] rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c] placeholder:text-gray-500"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-[30.99px] p-8">
                                            <section className="space-y-[31px]">
                                                <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Variations
                                                </h2>
                                                <div className="space-y-[31px]">
                                                    <div className="space-y-[16.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            AVAILABLE SIZES
                                                        </label>
                                                        <ToggleGroup
                                                            type="single"
                                                            value={selectedSize}
                                                            onValueChange={(value) => {
                                                                if (value) setSelectedSize(value);
                                                            }}
                                                            className="justify-start gap-3"
                                                        >
                                                            {sizes.map((size) => (
                                                                <ToggleGroupItem
                                                                    key={size}
                                                                    value={size}
                                                                    className="h-14 w-14 rounded-lg border border-[#c4c7c7] text-sm font-medium tracking-[0.28px] text-[#444748] data-[state=on]:border-black data-[state=on]:bg-black data-[state=on]:text-white"
                                                                    aria-label={`Size ${size}`}
                                                                >
                                                                    {size}
                                                                </ToggleGroupItem>
                                                            ))}
                                                        </ToggleGroup>
                                                    </div>
                                                    <div className="space-y-[16.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            COLOR SWATCHES
                                                        </label>
                                                        <div className="flex items-center gap-4">
                                                            {swatches.map((swatch) => (
                                                                <button
                                                                    key={swatch.name}
                                                                    type="button"
                                                                    aria-label={swatch.name}
                                                                    className={`h-10 w-10 rounded-full ${swatch.className} ${swatch.selected
                                                                            ? "shadow-[0px_0px_0px_4px_#000000,0px_0px_0px_2px_#ffffff]"
                                                                            : ""
                                                                        }`}
                                                                />
                                                            ))}
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className="h-10 w-10 rounded-full border-[#c4c7c7] p-0"
                                                            >
                                                                <PlusIcon className="h-4 w-4 text-[#444748]" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex flex-col gap-8 xl:col-span-4">
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-4 p-8">
                                            <div className="flex items-center justify-between gap-4">
                                                <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Media
                                                </h2>
                                                <span className="text-xs font-bold leading-4 text-zinc-400">
                                                    0 / 5 IMAGES
                                                </span>
                                            </div>
                                            <div className="flex min-h-[374.22px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#c4c7c7] bg-[#f3f3f4] px-6 text-center">
                                                <div className="mb-5 flex h-[43px] w-[27px] items-center justify-center rounded-sm border-2 border-[#1a1c1c]">
                                                    <div className="h-5 w-3 rounded-sm border-2 border-[#1a1c1c]" />
                                                </div>
                                                <p className="text-sm font-medium tracking-[0.28px] text-[#1a1c1c]">
                                                    Drop your image here
                                                </p>
                                                <p className="mt-[31px] text-xs font-semibold leading-[14.4px] text-[#444748]">
                                                    Supports high-res JPG, PNG (Max
                                                    <br />
                                                    10MB)
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                {Array.from({ length: 4 }).map((_, index) => (
                                                    <div
                                                        key={`media-slot-${index}`}
                                                        className="h-[64.17px] rounded-lg border border-dashed border-[#c4c7c7] bg-[#f3f3f4]"
                                                    />
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-[31.99px] p-8">
                                            <section className="space-y-8">
                                                <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                    Organization
                                                </h2>
                                                <div className="space-y-6">
                                                    <div className="space-y-[8.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            PRODUCT CATEGORY
                                                        </label>
                                                        <Select>
                                                            <SelectTrigger className="h-[57.59px] rounded-lg border-0 bg-[#f3f3f4] px-4 text-base text-[#1a1c1c]">
                                                                <SelectValue placeholder="Select a category" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="placeholder">
                                                                    Select a category
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-[8.39px]">
                                                        <label className="block text-xs font-semibold tracking-[0.60px] text-[#444748]">
                                                            PRODUCT STATUS
                                                        </label>
                                                        <div className="flex items-center justify-between rounded-lg bg-[#f3f3f4] p-4">
                                                            <span className="text-base leading-[25.6px] text-[#1a1c1c]">
                                                                Draft Mode
                                                            </span>
                                                            <Switch />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3 pt-4">
                                                        <label className="flex items-start gap-3">
                                                            <Checkbox />
                                                            <span className="text-sm leading-5 text-[#444748]">
                                                                Visible in Online Store
                                                            </span>
                                                        </label>
                                                        <label className="flex items-start gap-3">
                                                            <Checkbox />
                                                            <span className="text-sm leading-5 text-[#444748]">
                                                                Apply Seasonal Tax
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </section>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-xl border-[#e6e6e6] bg-white shadow-none">
                                        <CardContent className="flex flex-col gap-4 p-8">
                                            <h2 className="text-2xl font-semibold leading-[31.2px] text-[#1a1c1c]">
                                                SearchIcon Preview
                                            </h2>
                                            <div className="rounded-lg bg-[#f3f3f4] p-4">
                                                <div className="space-y-1">
                                                    <p className="text-lg font-medium leading-7 text-[#1a0dab]">
                                                        Minimalist Wool Overcoat | Fabrica Essentials
                                                    </p>
                                                    <p className="text-sm leading-5 text-[#006621]">
                                                        fabrica.com › products › outerwear ›
                                                        <br />
                                                        wool-coat
                                                    </p>
                                                    <p className="text-sm leading-5 text-[#444748]">
                                                        The ultimate cold-weather staple.
                                                        <br />
                                                        Meticulously crafted from high-grade…
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                            <section className="flex flex-col gap-4 border-t border-[#c4c7c7] pt-8 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-[9px] w-[13px] text-[#444748]" />
                                    <span className="text-xs font-semibold leading-[14.4px] text-[#444748]">
                                        Autosaved 2 minutes ago
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center justify-end gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-auto rounded-lg border-[#c4c7c7] px-10 py-4 text-sm font-medium tracking-[0.28px] text-[#1a1c1c]"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="button"
                                        className="h-auto rounded-lg bg-black px-10 py-4 text-sm font-medium tracking-[0.28px] text-white shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] hover:bg-black/90"
                                    >
                                        Publish Product
                                    </Button>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
