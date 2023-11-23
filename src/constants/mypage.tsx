import {
  IcInquiry,
  IcLogout,
  IcMyOrderList,
  IcNotice,
} from '../../public/icons';
import { FITAPAT_EMAIL, FITAPAT_INSTAGRAM } from './fitapatUrls';

export const MYPAGE_MENU = [
  {
    id: 1,
    name: '주문내역',
    icon: <IcMyOrderList />,
    path: '/mypage/orderlist',
  },
  { id: 2, name: '공지사항', icon: <IcNotice />, path: FITAPAT_INSTAGRAM },
  {
    id: 3,
    name: '문의하기',
    icon: <IcInquiry />,
    path: `mailto:${FITAPAT_EMAIL}`,
  },
];
