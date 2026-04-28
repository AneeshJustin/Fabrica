import {
  BadgePercentIcon,
  BarChart3Icon,
  BoxesIcon,
  LayoutGridIcon,
  Package2Icon,
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
  {
    label: 'Products',
    icon: Package2Icon,
    path: '/products-u45-fabrica-admin',
  },
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
    icon: BadgePercentIcon,
    path: '/discounts-u45-fabrica-admin',
  },
  { label: 'Reviews', icon: StarIcon, path: '/reviews-u45-fabrica-admin' },
  { label: 'Settings', icon: SettingsIcon, path: '/settings-u45-fabrica-admin' },
];

export const AsideSidenavbarWrapperSubsection = () => {
  const navigate = useNavigate();
  const currentPath = '/products-u45-fabrica-admin';

  return (
    <aside className="flex h-full w-64 flex-col items-start gap-2 self-stretch border-r border-zinc-200 bg-neutral-50 p-4">
      <header className="flex w-full flex-col items-start px-4 pb-8 pt-0">
        <h1 className="[font-family:'Manrope',Helvetica] text-2xl font-extrabold leading-8 tracking-[-1.20px] text-zinc-900">
          Fabrica
        </h1>
        <p className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-5 tracking-[-0.35px] text-zinc-500">
          Admin Portal
        </p>
      </header>
      <nav className="w-full" aria-label="Sidebar">
        <ul className="flex w-full flex-col gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;

            return (
              <li key={item.label} className="w-full">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => item.path !== '#' && navigate(item.path)}
                  className={`h-auto w-full justify-start gap-3 rounded-lg px-4 py-2.5 hover:bg-zinc-100 ${
                    isActive
                      ? 'bg-zinc-900 text-white hover:bg-zinc-900 hover:text-white'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-5 tracking-[-0.35px]">
                    {item.label}
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
