import { Home, User } from 'lucide-vue-next'
import type { ILink } from './types'

export const navLinks: ILink[] = [
  {
    label: 'Home',
    to: '/',
    icon: <Home size={20} />,
  },
  {
    label: 'users',
    to: '/users',
    icon: <User size={20} />,
  },
]
