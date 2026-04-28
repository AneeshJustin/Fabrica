import { ScrollArea } from "../../components/ui/scroll-area";
import { AsideSidenavbarWrapperSubsection } from "./sections/AsideSidenavbarWrapperSubsection";
import { HeaderTopappbarWrapperSubsection } from "./sections/HeaderTopappbarWrapperSubsection";
import { MainContentWrapperSubsection } from "./sections/MainContentWrapperSubsection";

export const ProductsFabrica = () => {
    return (
        <div
            className="min-h-screen w-full bg-[linear-gradient(0deg,rgba(249,249,249,1)_0%,rgba(249,249,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
            data-model-id="111:771"
        >
            <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[256px_minmax(0,1fr)]">
                <aside className="border-r border-border bg-background/70">
                    <AsideSidenavbarWrapperSubsection />
                </aside>
                <div className="flex min-w-0 flex-col">
                    <header className="sticky top-0 z-20 bg-[linear-gradient(0deg,rgba(249,249,249,1)_0%,rgba(249,249,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
                        <HeaderTopappbarWrapperSubsection />
                    </header>
                    <main className="min-w-0 flex-1">
                        <ScrollArea className="h-full w-full">
                            <MainContentWrapperSubsection />
                        </ScrollArea>
                    </main>
                </div>
            </div>
        </div>
    );
};
