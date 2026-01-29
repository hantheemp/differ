export default function TextInput(): React.JSX.Element {
  return (
    <input
      type="text"
      className="
        input input-bordered
        bg-base-200 text-base-content
        font-mono text-sm
        focus:outline-none focus:ring-1 focus:ring-primary
        transition-colors
      "
    />
  )
}
