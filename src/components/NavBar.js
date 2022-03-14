import styled from "styled-components";
import { Link } from "react-router-dom";

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
`


export const NavBar = () => {
    return (
        <nav>
            <NavBarr>
                <Link to="/">
                    <NavItem>Home</NavItem>
                </Link>
                <NavItem>Favorites</NavItem>
                <Link to="/movies">
                    <NavItem>Movies</NavItem>
                </Link>
            </NavBarr>
        </nav>
    )
}