import Navbar from './components/navbar/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import { Footer } from './components';
import Products from './pages/products/Products';
import SignUp from './pages/sign-up/SignUp';
import { FooterLinkTitle } from './components/Footer/FooterElement';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/sign-up" exact element={<SignUp />} />
                <Route path="/footer" exact element={<FooterLinkTitle />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
