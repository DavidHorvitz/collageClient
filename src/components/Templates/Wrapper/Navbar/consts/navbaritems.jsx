import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import DnsIcon from '@mui/icons-material/Dns';

export const tableNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Student details',
        route: 'all-students',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Courses details',
        route: 'all-courses',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Lecturers details',
        route: 'all-lecturers',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Webmaster details',
        route: 'all-webmasters',
    }
];
export const addNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Add Student',
        route: 'add-student',
    },
    {
        id: 1,
        icon: <ImageIcon />,
        label: 'Add Course',
        route: 'add-course',
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'Add Lecturer',
        route: 'add-lecturer',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Add Webmaster',
        route: 'add-webmaster',
    }
];