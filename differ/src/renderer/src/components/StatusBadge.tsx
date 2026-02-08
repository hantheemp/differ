export default function StatusBadge({ status }: { status: string }) {
  const color = status === 'added' ? '#2ecc71' : status === 'removed' ? '#e74c3c' : '#f1c40f'

  return (
    <span
      style={{
        fontSize: 12,
        color,
        marginLeft: 'auto'
      }}
    >
      {status}
    </span>
  )
}
