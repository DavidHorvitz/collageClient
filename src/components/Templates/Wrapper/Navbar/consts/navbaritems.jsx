import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import DnsIcon from '@mui/icons-material/Dns';
import AssistantIcon from '@mui/icons-material/Assistant';
import AppleIcon from '@mui/icons-material/Apple';

export const tableNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Student details',
        route: 'all-students',
        bgColorClass: 'bg-neutral-500',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Courses details',
        route: 'all-courses',
        bgColorClass: 'bg-neutral-400',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Lecturers details',
        route: 'all-lecturers',
        bgColorClass: 'bg-neutral-300',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Webmaster details',
        route: 'all-webmasters',
        bgColorClass: 'bg-neutral-200',
    },
    {
        id: 4,
        icon: <AssistantIcon />,
        label: 'Rooms details',
        route: 'all-rooms',
        bgColorClass: 'bg-neutral-100',
    },
    {
        id: 5,
        icon: <AppleIcon />,
        label: 'Syllabuses details',
        route: 'all-syllabuses',
        bgColorClass: 'bg-neutral-50',
    }
];

export const addNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Add Student',
        route: 'add-student',
        bgColorClass: 'bg-neutral-500',
    },
    {
        id: 1,
        icon: <ImageIcon />,
        label: 'Add Course',
        route: 'add-course',
        bgColorClass: 'bg-neutral-400',
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'Add Lecturer',
        route: 'add-lecturer',
        bgColorClass: 'bg-neutral-300',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Add Webmaster',
        route: 'add-webmaster',
        bgColorClass: 'bg-neutral-200',
    },
    {
        id: 4,
        icon: <AssistantIcon />,
        label: 'Add Room',
        route: 'add-room',
        bgColorClass: 'bg-neutral-100',
    },
    {
        id: 5,
        icon: <AppleIcon />,
        label: 'Add Syllabus',
        route: 'add-syllabus',
        bgColorClass: 'bg-neutral-50',
    }
];