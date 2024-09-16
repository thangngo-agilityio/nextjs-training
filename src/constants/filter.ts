import {
  BedActiveIcon,
  BedIcon,
  ChairActiveIcon,
  ChairIcon,
  SofaActiveIcon,
  SofaIcon,
  StarActiveIcon,
  StarIcon,
  TableActiveIcon,
  TableIcon,
} from '@/icons';

export const MENU_ITEM_FILTER = [
  {
    id: '1',
    icon: StarIcon,
    iconActive: StarActiveIcon,
    itemContent: 'Popular',
    destination: 'Popular',
  },
  {
    id: '2',
    icon: ChairIcon,
    iconActive: ChairActiveIcon,
    itemContent: 'Chair',
    destination: 'Chair',
  },
  {
    id: '3',
    icon: TableIcon,
    iconActive: TableActiveIcon,
    itemContent: 'Workstation',
    destination: 'Workstation',
  },
  {
    id: '4',
    icon: SofaIcon,
    iconActive: SofaActiveIcon,
    itemContent: 'Living room',
    destination: 'Living room',
  },
  {
    id: '5',
    icon: BedIcon,
    iconActive: BedActiveIcon,
    itemContent: 'Bedroom',
    destination: 'Bedroom',
  },
];
