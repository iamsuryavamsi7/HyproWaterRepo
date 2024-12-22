import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HyproWaterHome from './Components/HyproWaterHome'

function App() {

	return (
		
		<BrowserRouter>
		
			<Routes>

				<Route index element={<HyproWaterHome />}/>
				<Route path='/' element={<HyproWaterHome />} />

			</Routes>
		
		</BrowserRouter>
	
	)
}

export default App
