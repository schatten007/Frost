import styled from "styled-components";
import { motion } from "framer-motion";

import {useEffect, useState} from "react";
import { fetchGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//Router
import { useLocation } from "react-router";

//FramerMotion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


const Home = () => {

    const dispatch = useDispatch();

    useEffect( () => {
      dispatch(fetchGames());
    }, [dispatch]);

    const { upcoming, popular, newGames, searched } = useSelector( state => state.games );

    const location = useLocation().pathname;
    const [ showDetail, setShowDetail ] = useState(false);
    const {loaded} = useSelector(state => state.detail);

    useEffect( () => {
        setShowDetail(location.toString().includes("game"));
    }, [location] );

    return(
        <HomeStyled>
            <AnimateSharedLayout>
                <AnimatePresence>
                 {(showDetail && loaded) && <GameDetail />}
                </AnimatePresence>
                {(searched.length) && <>
                <h2>Searched</h2>
                <Games>
                    {
                        searched.map( game => <Game title={game.name} release={game.released} img={game.background_image} id={game.id} key={game.id}/>)
                    }
                </Games>
                </>}
                { !(searched.length) &&
                <>
                <h2>Upcoming Games</h2>
                <Games>
                    { upcoming && 
                        upcoming.map( game => <Game title={game.name} release={game.released} img={game.background_image} id={game.id} key={game.id}/>)
                    }
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    { popular && 
                        popular.map( game => <Game title={game.name} release={game.released} img={game.background_image} id={game.id} key={game.id}/>)
                    }
                </Games>
                <h2>New Games</h2>
                <Games>
                    { newGames && 
                        newGames.map( game => <Game title={game.name} release={game.released} img={game.background_image} id={game.id} key={game.id}/>)
                    }
                </Games>
                </>}
            </AnimateSharedLayout>
        </HomeStyled>
    );
}

const HomeStyled = styled(motion.div)`
    padding: 2rem 5rem;
    h2{
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bolder;
    }
`;

const Games = styled(motion.div)`
    min-height: 60vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;
export default Home;