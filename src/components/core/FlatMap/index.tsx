import type { JSX } from 'vue/jsx-runtime'

interface IProps<T> {
  data: T[]
  renderItem: ({ value, index }: { value: T; index: number }) => JSX.Element
  keyExtractor?: (value: T, index: number) => string | number
  useFragment?: boolean
}

export default function FlatMap<T>({
  data,
  renderItem,
  keyExtractor,
  useFragment = true,
}: IProps<T>) {
  if (!data || data.length === 0) return null

  const items = data.map((value, index) => {
    const key = keyExtractor ? keyExtractor(value, index) : index
    return <div key={key}>{renderItem({ value, index })}</div>
  })

  // Always return a single root element
  return useFragment ? <>{items}</> : <div>{items}</div>
}
