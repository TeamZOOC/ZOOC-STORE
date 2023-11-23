import { IcInquiry, IcMyOrderList, IcNotice } from '../../public/icons';

export const MYPAGE_MENU = [
  {
    id: 1,
    name: '주문내역',
    icon: <IcMyOrderList />,
    path: '/mypage/orderlist',
  },
  { id: 2, name: '공지사항', icon: <IcNotice />, path: '/notice' },
  {
    id: 3,
    name: '문의하기',
    icon: <IcInquiry />,
    path: 'https://www.naver.com/',
  },
];
