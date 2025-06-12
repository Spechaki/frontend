import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRoutes from './router';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
         <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
export default App;

