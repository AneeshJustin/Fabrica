import { BellIcon, SearchIcon, Settings2Icon } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const actionButtons = [
    { label: "Notifications", icon: BellIcon },
    { label: "Settings", icon: Settings2Icon },
];

export const HeaderTopappbarWrapperSubsection = () => {
    return (
        <header className="flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-[#ffffffcc] px-8 py-0 shadow-[0px_1px_2px_#0000000d] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
            <div className="flex max-w-md flex-1 items-center">
                <div className="relative w-full">
                    <SearchIcon className="pointer-events-none absolute left-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    <Input
                        type="search"
                        defaultValue=""
                        placeholder="SearchIcon products, orders..."
                        aria-label="SearchIcon products and orders"
                        className="h-10 rounded-full border-0 bg-zinc-100 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-gray-500 shadow-none [font-family:'Manrope',Helvetica] focus-visible:ring-1 focus-visible:ring-ring"
                    />
                </div>
            </div>
            <nav aria-label="Top app bar actions" className="flex items-center gap-6">
                {actionButtons.map(({ label, icon: Icon }) => (
                    <Button
                        key={label}
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={label}
                        className="h-10 w-10 rounded-full text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                        <Icon className="h-5 w-5" />
                    </Button>
                ))}

                <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
                    <Button
                        type="button"
                        variant="ghost"
                        className="h-auto p-0 text-sm font-semibold leading-5 text-zinc-900 [font-family:'Manrope',Helvetica] hover:bg-transparent hover:text-zinc-900"
                    >
                        Profile
                    </Button>
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src="https://c.animaapp.com/moiaal67fUcb10/img/admin-avatar.png"
                            alt="Profile"
                        />
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
        </header>
    );
};
