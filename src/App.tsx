import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from './views/auth/SignIn/SignIn';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<p>sign up</p>} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace={true} />} />
      </Routes>
    </main>
  )
}

export default App
