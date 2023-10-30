import Banner from "./Banner/Banner";
import About from "./about/About";
import Services from "./services/Services";
import Footer from '../../Pages/shared/footer/Footer';
import Contact from "./Contact/Contact";


const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;