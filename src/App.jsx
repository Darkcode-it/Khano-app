import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu.jsx'
import Header from './components/header/Header.jsx'
import Store from "./components/Store/Story.jsx"
import Articles from "./components/Articles/Article.jsx";
import About from "./components/about/About.jsx";
import Calculator from "./components/calculator/Calculator.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import ForgotPassword from "./components/login/ForgotPassword.jsx";
import ResetPassword from "./components/login/ResetPassword.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple navigation function to handle page changes
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={navigateTo} />;
      case 'register':
        return <Register onNavigate={navigateTo} />;
      case 'forgot-password':
        return <ForgotPassword onNavigate={navigateTo} />;
      case 'reset-password':
        return <ResetPassword onNavigate={navigateTo} />;
      case 'home':
      default:
        return (
          <>
            <Header />
            <Store />
            <Articles />
            <About />
          </>
        );
    }
  };

  return (
    <div dir='rtl'>
      <Menu onNavigate={navigateTo} />
      {renderContent()}
      <Footer />
    </div>
  )
}

export default App
