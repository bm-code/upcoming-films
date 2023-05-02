import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import logo from '../img/logo.svg'
import './Header.css'
import SinglePage from '../pages/SinglePage';

export default function Header({ movieID }) {


    return (

        <BrowserRouter>
            <div className="header-full">

                <div className="header">
                    <div className="header__logo">
                        <img src={logo} alt="Logo de la web" title="Logo principal" />
                    </div>
                    <NavLink to="/" className={(navData) => navData.isActive ? "active header__link" : " header__link"}>Ver todos los estrenos</NavLink>
                </div>
            </div>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path={`/pelicula/:${movieID}`} element={<SinglePage />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>
    )
}