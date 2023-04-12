import { HomeIcon, FilmIcon, MagnifyingGlassCircleIcon } from '@heroicons/vue/24/outline'
import { 
    HomeIcon as HomeSolidIcon,
    FilmIcon as FilmSolidIcon,
    MagnifyingGlassCircleIcon as  MagnifyingGlassCircleSolidIcon
} from '@heroicons/vue/24/solid'

export const menu = [
    {
        to: '/',
        icon: HomeIcon,
        activeIcon: HomeSolidIcon,
    },

    {
        to: '/search',
        icon: MagnifyingGlassCircleIcon,
        activeIcon: MagnifyingGlassCircleSolidIcon,
    },

    {
        to: '/movies/1',
        icon: FilmIcon,
        activeIcon: FilmSolidIcon,
    },
]
