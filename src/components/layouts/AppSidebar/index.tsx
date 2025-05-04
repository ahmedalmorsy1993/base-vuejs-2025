import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { useLocale } from '@/hooks/use-locale'
import NavItems from './NavItems'

export function AppSidebar() {
  const { side } = useLocale()
  return (
    <Sidebar side={side.value}>
      <SidebarHeader>
        <h1>logo</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <NavItems />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
