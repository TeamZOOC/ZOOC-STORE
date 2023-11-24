import { IcInquiry, IcMyOrderList, IcNotice } from '../../public/icons';
import { FITAPAT_INSTAGRAM, FITAPAT_KAKAO_LINK } from './fitapatUrls';

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
    path: FITAPAT_KAKAO_LINK,
  },
];
