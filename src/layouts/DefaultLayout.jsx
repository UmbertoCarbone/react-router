import { Outlet, NavLink } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 w-100">
                <div className="container">

                    <h3>e cre ca</h3>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">Chi siamo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Prodotti</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container text-center">
                <Outlet />
            </div>
        </>
    );
}