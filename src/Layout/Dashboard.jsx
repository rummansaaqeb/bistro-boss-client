import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome className="w-5 h-5 text-white"></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar className="w-5 h-5 text-white"></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList className="w-5 h-5 text-white"></FaList>
                            Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd className="w-5 h-5 text-white"></FaAd>
                            Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart className="w-5 h-5 text-white"></FaShoppingCart>
                            My Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;