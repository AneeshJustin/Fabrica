import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusIcon,
    TrendingUpIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Progress } from "../../../../components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../components/ui/table";

const filters = {
    category: {
        label: "Category",
        value: "All Categories",
        options: ["All Categories"],
    },
    stockLevel: {
        label: "Stock Level",
        value: "Any Stock",
        options: ["Any Stock"],
    },
};

const products = [
    {
        name: "Essential Tee",
        variant: "White • XL",
        sku: "FAB-TS-001",
        category: "Apparel",
        price: "$45.00",
        stock: 124,
        stockProgress: 80,
        stockTone: "green",
        status: "Published",
        statusTone: "published",
    },
    {
        name: "Matte Ceramic Mug",
        variant: "Charcoal • 12oz",
        sku: "FAB-HG-024",
        category: "Home",
        price: "$28.00",
        stock: 8,
        stockProgress: 12,
        stockTone: "orange",
        status: "Low Stock",
        statusTone: "low",
    },
    {
        name: "Heritage Backpack",
        variant: "Tan • Large",
        sku: "FAB-AC-882",
        category: "Accessories",
        price: "$185.00",
        stock: 42,
        stockProgress: 45,
        stockTone: "green",
        status: "Draft",
        statusTone: "draft",
    },
    {
        name: "Observer Shades",
        variant: "Midnight Black",
        sku: "FAB-AC-102",
        category: "Accessories",
        price: "$120.00",
        stock: 0,
        stockProgress: 0,
        stockTone: "red",
        status: "Out of Stock",
        statusTone: "out",
    },
];

const summaryCards = [
    {
        label: "Top Selling Category",
        value: "Apparel",
        dark: false,
    },
    {
        label: "Stock Alerts",
        value: "5 Products Low",
        dark: false,
    },
    {
        label: "Monthly Revenue",
        value: "$12,482.00",
        dark: true,
        delta: "+12%",
    },
];

const getStatusClasses = (tone) => {
    if (tone === "published") {
        return {
            badge: "bg-green-50 text-green-700 hover:bg-green-50",
            dot: "bg-green-500",
        };
    }

    if (tone === "low") {
        return {
            badge: "bg-orange-50 text-orange-700 hover:bg-orange-50",
            dot: "bg-orange-400",
        };
    }

    if (tone === "draft") {
        return {
            badge: "bg-neutral-50 text-zinc-500 hover:bg-neutral-50",
            dot: "bg-zinc-300",
        };
    }

    return {
        badge: "bg-red-50 text-[#ba1a1a] hover:bg-red-50",
        dot: "bg-[#ba1a1a]",
    };
};

const getProgressIndicatorClass = (tone) => {
    if (tone === "orange") {
        return "[&>div]:bg-orange-400";
    }

    if (tone === "red") {
        return "[&>div]:bg-[#ba1a1a]";
    }

    return "[&>div]:bg-green-500";
};

const getStockTextClass = (tone) => {
    if (tone === "orange") {
        return "text-orange-600";
    }

    if (tone === "red") {
        return "text-[#ba1a1a]";
    }

    return "text-zinc-500";
};

export const MainContentWrapperSubsection = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="relative mb-[-1139.71px] flex w-full flex-[0_0_auto] flex-col items-start gap-8 self-stretch px-8 pb-16 pt-24">
            <header className="flex w-full flex-[0_0_auto] items-end justify-between self-stretch">
                <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-[3px]">
                    <div className="flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
                        <h1 className="mt-[-1.00px] flex h-[39px] w-[137.08px] items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-[32px] font-semibold leading-[38.4px] tracking-[-0.32px] text-black">
                            Products
                        </h1>
                    </div>
                    <p className="mt-[-1.00px] flex h-[26px] w-[278.75px] items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#444748]">
                        Manage your catalog and stock levels.
                    </p>
                </div>
                <Button 
                    onClick={() => navigate("/add-product-u45-fabrica-admin")}
                    className="h-auto gap-2 rounded-lg bg-black px-8 py-4 shadow-[0px_1px_2px_#0000000d] hover:bg-black"
                >
                    <PlusIcon className="h-4 w-4" />
                    <span className="flex h-5 w-[84.34px] items-center justify-center whitespace-nowrap text-center [font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.28px] text-white">
                        Add Product
                    </span>
                </Button>
            </header>
            <Card className="w-full rounded-xl border-zinc-100 bg-white shadow-none">
                <CardContent className="flex items-end gap-4 px-6 pb-[23px] pt-[31px]">
                    <div className="grid flex-1 grid-cols-3 gap-4">
                        <div className="flex min-w-60 flex-col gap-[7px]">
                            <label className="h-[15px] whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0] text-[#444748]">
                                {filters.category.label}
                            </label>
                            <Select defaultValue={filters.category.value}>
                                <SelectTrigger className="h-[42px] rounded-lg border-zinc-200 px-4 [font-family:'Manrope',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#1a1c1c]">
                                    <SelectValue placeholder={filters.category.value} />
                                </SelectTrigger>
                                <SelectContent>
                                    {filters.category.options.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex min-w-60 flex-col gap-[7px]">
                            <label className="h-[15px] whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0] text-[#444748]">
                                {filters.stockLevel.label}
                            </label>
                            <Select defaultValue={filters.stockLevel.value}>
                                <SelectTrigger className="h-[42px] rounded-lg border-zinc-200 px-4 [font-family:'Manrope',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#1a1c1c]">
                                    <SelectValue placeholder={filters.stockLevel.value} />
                                </SelectTrigger>
                                <SelectContent>
                                    {filters.stockLevel.options.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex min-w-60 flex-col gap-[7px]">
                            <label className="h-[15px] whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0] text-[#444748]">
                                Price Range
                            </label>
                            <div className="flex items-center gap-2">
                                <Input
                                    defaultValue=""
                                    placeholder="Min"
                                    className="h-[42px] rounded-lg border-zinc-200 px-4 [font-family:'Manrope',Helvetica] text-sm font-normal text-gray-500 placeholder:text-gray-500"
                                />
                                <span className="flex h-6 w-[6.73px] items-center justify-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-base font-normal leading-6 tracking-[0] text-zinc-400">
                                    -
                                </span>
                                <Input
                                    defaultValue=""
                                    placeholder="Max"
                                    className="h-[42px] rounded-lg border-zinc-200 px-4 [font-family:'Manrope',Helvetica] text-sm font-normal text-gray-500 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="secondary"
                        className="h-auto rounded-lg bg-[#e2e3de] px-6 py-2.5 [font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.28px] text-[#636561] shadow-none hover:bg-[#e2e3de]"
                    >
                        Clear Filters
                    </Button>
                </CardContent>
            </Card>
            <Card className="w-full overflow-hidden rounded-xl border-zinc-100 bg-white shadow-[0px_1px_2px_#0000000d]">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-[#fafafa80]">
                                <TableRow className="border-zinc-100 hover:bg-transparent">
                                    <TableHead className="h-auto min-w-[509.14px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        PRODUCT
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[289.98px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        SKU
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[292.67px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        CATEGORY
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[212.52px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        PRICE
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[354.09px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        STOCK
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[313.5px] px-6 py-4 text-left [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        STATUS
                                    </TableHead>
                                    <TableHead className="h-auto min-w-[266.09px] px-6 py-4 text-right [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0.60px] text-[#444748]">
                                        ACTIONS
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product, index) => {
                                    const statusStyles = getStatusClasses(product.statusTone);

                                    return (
                                        <TableRow
                                            key={product.sku}
                                            className={
                                                index === 0
                                                    ? "border-zinc-50 hover:bg-transparent"
                                                    : "border-zinc-50 hover:bg-transparent"
                                            }
                                        >
                                            <TableCell className="min-w-[509.14px] px-6 py-5">
                                                <div className="flex w-[461.14px] items-center gap-4">
                                                    <div className="h-12 w-12 rounded-lg border border-zinc-100 bg-[linear-gradient(0deg,rgba(244,244,245,1)_0%,rgba(244,244,245,1)_100%)]" />
                                                    <div className="inline-flex flex-col items-start">
                                                        <div className="mt-[-1.00px] flex h-5 items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.28px] text-black">
                                                            {product.name}
                                                        </div>
                                                        <div className="mt-[-1.00px] flex h-4 items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-normal leading-4 tracking-[0] text-zinc-400">
                                                            {product.variant}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="min-w-[289.98px] px-6 py-5 pl-12 [font-family:'Manrope',Helvetica] text-base font-normal leading-[25.6px] tracking-[0] text-[#444748]">
                                                {product.sku}
                                            </TableCell>
                                            <TableCell className="min-w-[292.67px] px-6 py-5">
                                                <Badge className="rounded-full bg-zinc-100 px-3 py-[4.5px] [font-family:'Manrope',Helvetica] text-xs font-medium leading-4 tracking-[0] text-zinc-600 hover:bg-zinc-100">
                                                    {product.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="min-w-[212.52px] px-6 py-5 [font-family:'Manrope',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0.28px] text-black">
                                                {product.price}
                                            </TableCell>
                                            <TableCell className="min-w-[354.09px] px-6 py-5">
                                                <div className="flex w-[330.08px] items-center gap-2">
                                                    <Progress
                                                        value={product.stockProgress}
                                                        className={`h-1.5 w-24 rounded-full bg-zinc-100 ${getProgressIndicatorClass(product.stockTone)}`}
                                                    />
                                                    <span
                                                        className={`[font-family:'Manrope',Helvetica] text-xs ${product.stockTone === "orange" || product.stockTone === "red" ? "font-semibold" : "font-normal"} leading-4 tracking-[0] ${getStockTextClass(product.stockTone)}`}
                                                    >
                                                        {product.stock}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="min-w-[313.5px] px-6 py-5">
                                                <Badge
                                                    className={`gap-1.5 rounded-full px-2.5 py-1 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-4 tracking-[0] ${statusStyles.badge}`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                                                    />
                                                    {product.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="min-w-[266.09px] px-6 py-5">
                                                <div className="flex justify-end">
                                                    <Button
                                                        variant="ghost"
                                                        className="h-auto rounded-lg px-3 py-2 [font-family:'Manrope',Helvetica] text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <Separator className="bg-zinc-100" />
                    <footer className="flex items-center justify-between bg-[#fafafa4c] px-6 py-4">
                        <p className="whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0] text-zinc-500">
                            Showing 1 to 4 of 32 products
                        </p>
                        <nav
                            aria-label="Pagination"
                            className="inline-flex items-center gap-2"
                        >
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-lg border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50"
                                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                aria-label="Previous page"
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                            {[1, 2, 3].map((page) => (
                                <Button
                                    key={page}
                                    variant="ghost"
                                    className={`h-8 w-8 rounded-lg p-0 [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[14.4px] tracking-[0] ${currentPage === page
                                            ? "bg-black text-white hover:bg-black hover:text-white"
                                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                    aria-current={currentPage === page ? "page" : undefined}
                                >
                                    {page}
                                </Button>
                            ))}

                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-lg border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50"
                                onClick={() => setCurrentPage((page) => Math.min(3, page + 1))}
                                aria-label="Next page"
                            >
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </nav>
                    </footer>
                </CardContent>
            </Card>
            <section className="grid h-fit w-full grid-cols-3 gap-6 px-0 pb-0 pt-2">
                {summaryCards.map((card) => (
                    <Card
                        key={card.label}
                        className={
                            card.dark
                                ? "rounded-xl border-0 bg-zinc-900 shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
                                : "rounded-xl border border-zinc-100 bg-white shadow-[0px_1px_2px_#0000000d]"
                        }
                    >
                        <CardContent className="flex h-[98px] items-center justify-between gap-4 p-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className={
                                        card.dark
                                            ? "flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
                                            : "flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-100 bg-[linear-gradient(0deg,rgba(244,244,245,1)_0%,rgba(244,244,245,1)_100%)]"
                                    }
                                >
                                    {card.dark ? (
                                        <TrendingUpIcon className="h-5 w-5 text-green-400" />
                                    ) : (
                                        <div className="h-5 w-5 rounded-full bg-zinc-300" />
                                    )}
                                </div>
                                <div className="inline-flex flex-col items-start">
                                    <div
                                        className={`mt-[-1.00px] flex h-4 items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-medium leading-4 tracking-[0] ${card.dark ? "text-zinc-400" : "text-zinc-500"
                                            }`}
                                    >
                                        {card.label}
                                    </div>
                                    <div
                                        className={`mt-[-1.00px] flex h-8 items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-2xl font-semibold leading-[31.2px] tracking-[0] ${card.dark ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {card.value}
                                    </div>
                                </div>
                            </div>
                            {card.delta ? (
                                <div className="inline-flex items-center gap-1">
                                    <TrendingUpIcon className="h-4 w-4 text-green-400" />
                                    <span className="mt-[-1.00px] flex h-4 items-center whitespace-nowrap [font-family:'Manrope',Helvetica] text-xs font-bold leading-4 tracking-[0] text-green-400">
                                        {card.delta}
                                    </span>
                                </div>
                            ) : null}
                        </CardContent>
                    </Card>
                ))}
            </section>
        </section>
    );
};
