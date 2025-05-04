import { AppSidebar } from '@/components/layouts/AppSidebar'
import Navbar from '@/components/layouts/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { RouterView } from 'vue-router'

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main class="w-full">
        <Navbar />
        <section class="ps-2">
          <RouterView />
        </section>
      </main>
    </SidebarProvider>
  )
}
