import styled from "styled-components";
import { Link } from "react-router-dom";
import '../navbar.css'

const NavBarr = styled.ul`
    display: flex;
    position: absolute;
    top: 0;
    left: 23%;
    color: white;
    z-index: 100;
    width: 50%;
    justify-content: space-between;
`

const NavItem = styled.li`
    list-style: none;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;


    :hover {
        color: purple;
    }
`


export const NavBar = () => {
    return (
        <nav>
            <NavBarr>
                <Link to="/">
                    <NavItem>Home</NavItem>
                </Link>
                <Link to="/favorites">
                    <NavItem>Favorites</NavItem>
                </Link>
                <Link to="/movies">
                    <NavItem>Movies</NavItem>
                </Link>
            </NavBarr>
        </nav>
    )
}