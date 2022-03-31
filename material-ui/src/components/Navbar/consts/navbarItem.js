import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import FunctionsIcon from '@mui/icons-material/Functions';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleAltIcon />,
    label: 'Authentification',
    route: 'authentification',
  },
  {
    id: 1,
    icon: <AllInboxIcon />,
    label: 'Database',
    route: 'database',
  },
  {
    id: 2,
    icon: <StorageIcon />,
    label: 'Storage',
    route: 'storage',
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: 'Hoisting',
    route: 'hoisting',
  },
  {
    id: 4,
    icon: <FunctionsIcon />,
    label: 'Function',
    route: 'function',
  },
  {
    id: 5,
    icon: <PrecisionManufacturingIcon />,
    label: 'Machine learning',
    route: 'machine-learning',
  },
];
