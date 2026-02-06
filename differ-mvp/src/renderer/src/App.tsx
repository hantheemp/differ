import Directory from './organisms/Directory/Directory'
import Footer from './organisms/Footer/Footer'
import DiffTemplate from './templates/DiffTemplate/DiffTemplate'

function App(): React.JSX.Element {
  return (
    <div className="shadow-xl">
      <div className="min-h-screen bg-base-100 text-base-content p-6 space-y-4">
        <Directory></Directory>
        <DiffTemplate></DiffTemplate>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
