import {
  BarChart3Icon,
  BoxesIcon,
  LayoutGridIcon,
  PackageIcon,
  PercentIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { useNavigate } from 'react-router-dom';

const navigationItems = [
  {
    label: 'Dashboard',
    icon: LayoutGridIcon,
    path: '/dashboard-home-u45-fabrica-admin',
  },
  { label: 'Products', icon: PackageIcon, path: '/products-u45-fabrica-admin' },
  {
    label: 'Orders',
    icon: ShoppingCartIcon,
    path: '/orders-u45-fabrica-admin',
  },
  { label: 'Customers', icon: UsersIcon, path: '/customers-u45-fabrica-admin' },
  { label: 'Inventory', icon: BoxesIcon, path: '/inventory-u45-fabrica-admin' },
  {
    label: 'Analytics',
    icon: BarChart3Icon,
    path: '/analytics-u45-fabrica-admin',
  },
  {
    label: 'Discounts',
    icon: PercentIcon,
    path: '/discounts-u45-fabrica-admin',
  },
  { label: 'Reviews', icon: StarIcon, path: '/reviews-u45-fabrica-admin' },
  { label: 'Settings', icon: SettingsIcon, path: '#' },
];

export const DashboardSidebarSection = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-64 flex-col gap-2 self-stretch  border-gray-500 bg-neutral-50 p-4">
      <header className="flex w-full flex-col px-4 pb-8 pt-0">
        <h1 className="mt-[-1.00px] flex h-8 items-center whitespace-nowrap text-2xl font-extrabold leading-8 tracking-[-1.20px] text-zinc-900 [font-family:'Manrope',Helvetica]">
          Fabrica
        </h1>
        <p className="mt-[-1.00px] flex items-center text-sm font-medium leading-5 tracking-[-0.35px] text-zinc-500 [font-family:'Manrope',Helvetica]">
          Admin Portal
        </p>
      </header>
      <nav
        aria-label="Sidebar"
        className="flex w-full flex-col gap-1  border-gray-500"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`h-auto w-full justify-start gap-3 rounded-lg px-4 py-2.5 hover:bg-zinc-100 ${
                isActive
                  ? 'bg-zinc-900 text-white hover:bg-zinc-900 hover:text-white'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="mt-[-1.00px] flex items-center whitespace-nowrap text-sm font-medium leading-5 tracking-0 [font-family:'Manrope',Helvetica]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
