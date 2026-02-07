import { useDirectoryDiff } from './hooks/useDirectoryDiff'

function App(): React.JSX.Element {
  const { results, compare, loading } = useDirectoryDiff()
  return (
    <div className="bg-base-300 h-screen w-screen p-4">
      <div className="p-4 text-sm">
        <button
          onClick={() =>
            compare('C:/Users/temel/Desktop/testFiles/old', 'C:/Users/temel/Desktop/testFiles/new')
          }
        >
          Compare
        </button>

        {loading && <p>Loading...</p>}

        <ul>
          {results.map((r) => (
            <li key={r.path}>
              {r.path} — {r.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
