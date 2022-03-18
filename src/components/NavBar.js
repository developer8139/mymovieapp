import styled from "styled-components";
import { Link } from "react-router-dom";
import '../navbar.css'

const NavBarr = styled.ul`
    display: flex;
    position: fixed;
    top: 0;
    color: white;
    z-index: 100;
    width: 100vw;
    justify-content: space-evenly;
    background-color: black;
    padding: 15px;
    box-shadow: 2px 0px 2px black;
    opacity: 0.7;
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