import Banner from "./Banner/Banner";
import About from "./about/About";
import Services from "./services/Services";
import Footer from '../../Pages/shared/footer/Footer';


const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;