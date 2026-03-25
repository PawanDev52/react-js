import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h2>context api</h2>
    </UserContextProvider>
  )
}

export default App
