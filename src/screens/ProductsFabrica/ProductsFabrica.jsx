import { ScrollArea } from "../../components/ui/scroll-area";
import { AsideSidenavbarWrapperSubsection } from "./sections/AsideSidenavbarWrapperSubsection";
import { HeaderTopappbarWrapperSubsection } from "./sections/HeaderTopappbarWrapperSubsection";
import { MainContentWrapperSubsection } from "./sections/MainContentWrapperSubsection";

export const ProductsFabrica = () => {
    return (
        <div
            className="min-h-screen w-full bg-[#f9f9f9]"
            data-model-id="111:771"
        >
            <div className="flex min-h-screen">
                <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-neutral-50 lg:flex lg:flex-col">
                    <AsideSidenavbarWrapperSubsection />
                </aside>
                <div className="flex min-w-0 flex-1 flex-col min-h-0">
                    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white">
                        <HeaderTopappbarWrapperSubsection />
                    </header>
                    <main className="flex-1 min-h-0 overflow-hidden">
                        <ScrollArea className="h-full w-full">
                            <MainContentWrapperSubsection />
                        </ScrollArea>
                    </main>
                </div>
            </div>
        </div>
    );
};
