import News from '../News';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Doctors from './Doctors';
import Process from './Process';
import Services from './Services';
import Specialties from './Specialties';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <About />
      <Specialties />
      <Doctors />
      <Services />
      <Process />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};
export default LandingPage;
