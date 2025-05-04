import { AppSidebar } from '@/components/layouts/AppSidebar'
import Navbar from '@/components/layouts/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useLocale } from '@/hooks/use-locale'
import { computed, defineComponent, Transition } from 'vue'
import { RouterView, useRoute } from 'vue-router'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    // Composition API hooks must be called inside setup()
    const route = useRoute()
    const { lang } = useLocale()

    // Create a computed key for the transition
    const transitionKey = computed(() => `${route.fullPath}-${lang.value}`)

    // Return values to be used in the render function
    return {
      transitionKey,
    }
  },
  render() {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main class="w-full">
          <Navbar />
          <section class="ps-2">
            <Transition name="page" mode="out-in">
              <RouterView key={this.transitionKey} />
            </Transition>
          </section>
        </main>
      </SidebarProvider>
    )
  },
})
