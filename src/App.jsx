import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetails'; 
import Contact from './pages/Contact';
import Machines from './pages/Machines';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Main products page */}
        <Route path="/products" element={<Products />} />

        {/* Dynamic product route - this handles all product IDs */}
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* Machinaries page: 
            The first route handles the main page.
            The second route (/:category) handles sub-categories like 
            /machines/packaging-machines and /machines/printing-machines
        */}
        <Route path="/machines" element={<Machines />} />
        <Route path="/machines/:category" element={<Machines />} />

        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Go Home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;