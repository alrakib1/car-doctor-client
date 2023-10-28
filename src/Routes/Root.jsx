
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/footer/Footer';
import Navbar from '../Pages/shared/footer/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;