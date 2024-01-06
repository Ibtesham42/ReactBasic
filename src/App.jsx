
import Profile from "./Components/Profile"
import Login from "./Components/login"
import UserContextProvider from "./context/Contextprovider"


function App() {
  

  return (
    <UserContextProvider>
     <h1>React with Context</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
