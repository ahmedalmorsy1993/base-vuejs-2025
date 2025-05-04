import FlatMap from '@/components/core/FlatMap'
import { RouterLink } from 'vue-router'
import { navLinks } from './navLinks'

export default function NavItems() {
  return (
    <nav class="flex flex-col space-y-3">
      <FlatMap
        data={navLinks}
        renderItem={({ value }) => (
          <RouterLink
            to={value.to}
            v-slots={{
              default: ({ isExactActive }: { isExactActive: boolean }) => (
                <div
                  class={[
                    'flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300',
                    isExactActive
                      ? 'bg-amber-800 font-medium text-white hover:bg-amber-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800',
                  ]}
                >
                  {value.icon}
                  <span>{value.label}</span>
                </div>
              ),
            }}
          />
        )}
      />
    </nav>
  )
}
