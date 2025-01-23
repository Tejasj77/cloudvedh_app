// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const profile = {
  id: 'group-dashboard',
  title: 'Profile',
  type: 'group',
  children: [
    {
        id: 'profile',
        title: 'Company Information',
        type: 'item',
        url: '/profile/info',
        icon: icons.DashboardOutlined,
        breadcrumbs: false
      }
  ]
};

export default profile;
