import { SidebarTrigger } from '@/components/ui/sidebar'
import { useLocale } from '@/hooks/use-locale'
import { GlobeIcon } from 'lucide-vue-next'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  setup() {
    // Composition API hooks must be called inside setup()
    const { changeLang } = useLocale()
    
    // Return values to be used in the render function
    return {
      changeLang
    }
  },
  render() {
    return (
      <header class="sticky top-0 flex h-[60px] items-center bg-secondary px-2 text-secondary-foreground">
        <SidebarTrigger />
        <div class="flex-1">Navbar</div>
        <div class="flex items-center gap-2">
          <GlobeIcon class="cursor-pointer" onClick={this.changeLang} />
        </div>
      </header>
    )
  }
})
