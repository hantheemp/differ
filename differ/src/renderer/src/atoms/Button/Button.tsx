export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        btn btn-primary
        btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl
        font-medium
        transition-colors
      "
    >
      {children}
    </button>
  )
}
