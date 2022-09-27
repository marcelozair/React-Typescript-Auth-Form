import { Routes, Route } from 'react-router-dom';
import { SignIn } from './views/auth/SignIn/SignIn';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<p>sign up</p>} />
        <Route path="/" element={<p>none</p>} />
      </Routes>
    </main>
  )
}

export default App
