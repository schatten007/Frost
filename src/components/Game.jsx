
import styled from "styled-components";
import { motion } from "framer-motion";
//Fetch Game Details
import { fetchDetails } from "../actions/fetchDetails";
import { useDispatch } from "react-redux";
import { fetchScreenshot } from "../actions/fetchScreenshot";


//Router
import { Link } from "react-router-dom";
//Image Resizer
import { resizeImg } from "../resize";

const Game = ({ title, release, img, id }) => {
    const dispatch = useDispatch();
    const gameDetailsHandler = () => {
        dispatch(fetchDetails(id));
        dispatch(fetchScreenshot(id));
        document.body.style.overflow = "hidden";
    }
    
    return(
        <GameStyled layoutId={ id } onClick={gameDetailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3>{title}</motion.h3>
                <p>{release}</p>
                <motion.img layoutId={ `img ${id}` } src={resizeImg(img)} alt="game-artwork" />
            </Link>
        </GameStyled>
    );
}

const GameStyled = styled(motion.div)`
    min-height: 30vh;
    text-align: center;
    /* box-shadow: 0 0 15px rgba(255, 133, 163, 0.3); */
    box-shadow: 0 0 15px rgb(80, 182, 242, 0.3);
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    h3{
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: lighter;
    }
    p{
        padding: 0.8rem;
        font-size: 0.8rem;
        font-weight: lighter;
    }
`;

export default Game;