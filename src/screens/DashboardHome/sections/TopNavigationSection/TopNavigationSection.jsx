import { BellIcon, SearchIcon } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const actionItems = [
    {
        label: "Notifications",
        icon: BellIcon,
    },
];

const profile = {
    name: "Admin User",
    role: "Profile",
    avatar:
        "https://c.animaapp.com/moiaal67fUcb10/img/ab6axud7joxh5pmj-u3qdsjpfovf8nb1dm66wmbjugo45z341myksjkslivhf-wp.png",
};

export const TopNavigationSection = () => {
    return (
        <header className="relative z-10 flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-[#ffffffcc] px-4 backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] sm:px-6 lg:px-8">
            <form className="flex min-w-0 flex-1 items-center">
                <div className="relative w-full max-w-md">
                    <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    <Input
                        type="search"
                        aria-label="SearchIcon orders, products"
                        defaultValue=""
                        placeholder="SearchIcon orders, products..."
                        className="h-10 w-full rounded-lg border-0 bg-zinc-100 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-zinc-300 [font-family:'Manrope',Helvetica]"
                    />
                </div>
            </form>
            <nav
                aria-label="Top navigation"
                className="ml-4 flex shrink-0 items-center gap-4 sm:gap-6"
            >
                {actionItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Button
                            key={item.label}
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={item.label}
                            className="h-auto w-8 p-0 text-zinc-700 hover:bg-transparent hover:text-zinc-900"
                        >
                            <Icon className="h-4 w-4" />
                        </Button>
                    );
                })}

                <button
                    type="button"
                    className="flex items-center gap-3 border-l border-zinc-200 pl-4 text-left sm:pl-6"
                    aria-label={profile.name}
                >
                    <div className="flex flex-col items-end">
                        <span className="whitespace-nowrap text-right text-sm font-semibold leading-5 text-zinc-900 [font-family:'Manrope',Helvetica]">
                            {profile.name}
                        </span>
                        <span className="whitespace-nowrap text-right text-xs font-normal leading-4 text-zinc-500 [font-family:'Manrope',Helvetica]">
                            {profile.role}
                        </span>
                    </div>
                    <Avatar className="h-8 w-8 bg-zinc-200">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback className="bg-zinc-200 text-xs text-zinc-700">
                            AU
                        </AvatarFallback>
                    </Avatar>
                </button>
            </nav>
        </header>
    );
};
