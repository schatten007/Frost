import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSnowflake } from "react-icons/fa";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/searchGames";

const Nav = () => {
    
    const [ searchText, setSearchText ] = useState("");
    const dispatch = useDispatch();

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
    }

    const searchHandler = () => {
        dispatch(searchGames(searchText));
    }

    return(
        <StyledNav>
            <Logo>
                <FaSnowflake />
                <h3>Frost</h3>
            </Logo>
            <Search>
                <input onChange={searchTextHandler} type="text" value={searchText}/>
                <button onClick={searchHandler}>Search</button>
            </Search>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    /* display: flex;
    justify-content: center;
    align-content: space-around; */
    padding: 3rem 5rem;
    text-align: center;

    svg{
        color: #50B6F2;
        font-size: 2.5rem;
    }
    h3{
        font-size: 2rem;
    }
    input{
        border: 0px;
        width: 40%;
        box-shadow: 0px 0px 30px rgb(80, 182, 242, 0.3);
        font-size: 1.5rem;
        color: #02699C;
        font-family: 'Orbitron', sans-serif;
        padding: 0.5rem 1rem;
    }
    button{
        padding: 0.6rem 1rem;
        background-color: #50B6F2;
        cursor: pointer;
        color: white;
        border: 0;
        font-size: 1rem;
        font-family: 'Orbitron',sans-serif;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
`;

const Search = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;
export default Nav;