import Directory from './organisms/Directory/Directory'
import Footer from './organisms/Footer/Footer'

function App(): React.JSX.Element {
  return (
    <div className="bg-primary">
      <div className="min-h-screen bg-base-100 text-base-content p-6 space-y-4">
        <Directory></Directory>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
