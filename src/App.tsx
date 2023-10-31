import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';

function App() {

  const {fromLenguage, setFromLenguage} = useStore()

  return  (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLenguage('es')
      }}>esp</button>
      {fromLenguage}
    </div>
  )
}

export default App
