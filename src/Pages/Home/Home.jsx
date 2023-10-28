import Banner from "./Banner/Banner";
import About from "./about/About";
import Services from "./services/Services";


const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;