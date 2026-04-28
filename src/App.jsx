import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddProductFabrica } from './screens/AddProductFabrica/AddProductFabrica';
import { AnalyticsFabrica } from './screens/AnalyticsFabrica/AnalyticsFabrica';
import { CustomersFabrica } from './screens/CustomersFabrica/CustomersFabrica';
import { DashboardHome } from './screens/DashboardHome/DashboardHome';
import { DiscountsFabrica } from './screens/DiscountsFabrica/DiscountsFabrica';
import { InventoryFabrica } from './screens/InventoryFabrica/InventoryFabrica';
import { OrdersFabrica } from './screens/OrdersFabrica/OrdersFabrica';
import { ProductsFabrica } from './screens/ProductsFabrica/ProductsFabrica';
import { ReviewsFabrica } from './screens/ReviewsFabrica/ReviewsFabrica';
import { SettingsFabrica } from './screens/SettingsFabrica/SettingsFabrica';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <DashboardHome />,
  },
  {
    path: '/dashboard-home-u45-fabrica-admin',
    element: <DashboardHome />,
  },
  {
    path: '/add-product-u45-fabrica-admin',
    element: <AddProductFabrica />,
  },
  {
    path: '/products-u45-fabrica-admin',
    element: <ProductsFabrica />,
  },
  {
    path: '/orders-u45-fabrica-admin',
    element: <OrdersFabrica />,
  },
  {
    path: '/customers-u45-fabrica-admin',
    element: <CustomersFabrica />,
  },
  {
    path: '/inventory-u45-fabrica-admin',
    element: <InventoryFabrica />,
  },
  {
    path: '/analytics-u45-fabrica-admin',
    element: <AnalyticsFabrica />,
  },
  {
    path: '/discounts-u45-fabrica-admin',
    element: <DiscountsFabrica />,
  },
  {
    path: '/reviews-u45-fabrica-admin',
    element: <ReviewsFabrica />,
  },
  {
    path: '/settings-u45-fabrica-admin',
    element: <SettingsFabrica />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
