import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/auth/sign-in" element={<p>sign in</p>} />
        <Route path="/auth/sign-up" element={<p>sign up</p>} />
        <Route path="/" element={<p>none</p>} />
      </Routes>
    </main>
  )
}

export default App
