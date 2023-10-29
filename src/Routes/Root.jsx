
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/shared/footer/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;