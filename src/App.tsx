import './App.css'
import LoginLayout from './pages/login/LoginLayout'
import Login from './pages/login/Login'

function App() {

  return (
    <div className='h-screen min-h-screen'>
      <LoginLayout>
         <Login/>
      </LoginLayout>
    </div>
  )
}

export default App
