import { Button } from "../../components/ui/button";
import { DashboardSidebarSection } from "./sections/DashboardSidebarSection/DashboardSidebarSection";
import { OverviewContentSection } from "./sections/OverviewContentSection/OverviewContentSection";
import { TopNavigationSection } from "./sections/TopNavigationSection/TopNavigationSection";

export const DashboardHome = () => {
    return (
        <main
            className="bg-[linear-gradient(0deg,rgba(249,249,249,1)_0%,rgba(249,249,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
            data-model-id="111:480"
        >
            <div className="grid grid-cols-[256px_minmax(0,1fr)] grid-rows-[64px_minmax(0,1fr)]">
                <aside className="row-span-2 border-r border-border bg-transparent">
                    <DashboardSidebarSection />
                </aside>
                <header className="border-b border-border bg-transparent">
                    <TopNavigationSection />
                </header>
                <section className="relative min-w-0 bg-transparent">
                    <OverviewContentSection />
                    <Button
                        type="button"
                        aria-label="Button contextual"
                        className="fixed bottom-8 right-8 z-20 h-16 w-16 rounded-full bg-primary p-0 text-primary-foreground shadow-lg hover:bg-primary/90 md:bottom-10 md:right-10 md:h-[72px] md:w-[72px]"
                    />
                </section>
            </div>
        </main>
    );
};
