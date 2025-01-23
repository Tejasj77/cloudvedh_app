// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const sales = {
  id: 'group-dashboard',
  title: 'Sales',
  type: 'group',
  children: [
    {
      id: 'sales',
      title: 'Sales',
      type: 'item',
      url: '/sales/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default sales;
