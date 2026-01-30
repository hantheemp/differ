export default function Version() {
  const version = window.api?.getVersion() || '1.0.0'

  return <p className="text-neutral-content text-xs">v{version}</p>
}
