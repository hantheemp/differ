export default function FileInput(): React.JSX.Element {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Pick a file</legend>

      <input
        type="file"
        className="
          file-input file-input-bordered
          bg-base-200 text-base-content
          font-mono text-sm
          focus:outline-none focus:ring-1 focus:ring-primary
          transition-colors
        "
      />

      <label className="label text-base-content/70">
        Max size 2MB
      </label>
    </fieldset>
  )
}
