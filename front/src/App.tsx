import './App.css'
import SeminarList from './components/SeminarList'
import { Toaster } from './components/ui/sonner'

function App() {
	return (
		<>
			<SeminarList />
			<Toaster richColors />
			{/* toast container */}
		</>
	)
}

export default App
