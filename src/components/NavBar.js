import styled from "styled-components";
import { Link } from "react-router-dom";
import {Search} from './Search';
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


export const NavBar = ({search, setSearch}) => {
    return (
        <nav>
            <NavBarr>
                <span style={{textTransform: "uppercase", fontWeight: "bold"}}>Movie App</span>
                <Link to="/" style={{textDecoration: "none"}}>
                    <NavItem>Home</NavItem>
                </Link>
                <Link to="/favorites" style={{textDecoration: "none"}}>
                    <NavItem>Favorites</NavItem>
                </Link>
                <Link to="/movies" style={{textDecoration: "none"}}>
                    <NavItem>Movies</NavItem>
                </Link>
                <Search search={search} setSearch={setSearch}/>
            </NavBarr>
        </nav>
    )
}