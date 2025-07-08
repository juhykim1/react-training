import Loader from '@/components/Loader'

export default function Button({
  children,
  loading = false,
  ...restProps
}: {
  children: React.ReactNode
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...restProps}
      className="relative h-[32px] cursor-pointer rounded-md bg-blue-500 text-white hover:brightness-120">
      {loading ? <Loader color="#fff" /> : children}
    </button>
  )
}
