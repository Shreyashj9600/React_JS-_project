import './App.css'
import UserContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>this is createContext</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
