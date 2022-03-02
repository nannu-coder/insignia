import './App.css';
import Banner from './Components/Banner/Banner';
import DataStore from './Components/DataStore/DataStore';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Mobile from './Components/Mobile/Mobile';
import Navbar from './Components/Navbar/Navbar';
import Subcribe from './Components/Subscribe/Subcribe';
import Testimonial from './Components/Testimonial/Testimonial';
import TryFor from './Components/Try/TryFor';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <DataStore />
      <Features />
      <Mobile />
      <Testimonial />
      <Subcribe />
      <TryFor />
      <Footer />
    </div>
  );
}

export default App;
