import { Outlet, NavLink } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-fixed-transparent">
                <div className="container"
                >

                    <h2>SHOP</h2>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

        </>
    );
}