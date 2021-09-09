import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

//Router
import { useHistory } from "react-router";

//Image Resizer
import { resizeImg } from "../resize";

//React Icons
import { FaPlaystation, FaXbox, FaSteam, FaGamepad, FaApple} from "react-icons/fa"
import { SiNintendoswitch } from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//React Semantic UI
import { Popup } from "semantic-ui-react";

const GameDetail = () => {
    const { data, loaded } = useSelector((state)=>state.detail);
    const { images } = useSelector(state => state.screenshots);
    const history = useHistory();

    const detailHandler = (e) => {
        if(e.target.classList.contains("outside")){
            history.push("/");
            document.body.style.overflow = "auto";
        }
    };

    const iconHandler = (shape, k) => {
        let icon = <FaGamepad key={k} alt={shape}/>;
        const style = { color: "white", fontSize: "20px", background: "#50B6F2", opacity: 1, borderRadius: 0, padding: '0.3rem'};
        switch(shape){
            case "PlayStation 4":
            case "PlayStation 5":
            case "PlayStation 3":
            case "PlayStation 2":
            case "PlayStation 1":     
                icon = <FaPlaystation key={k} alt={shape}/>
                break;
            case "Xbox One":
            case "Xbox Series S/X":
            case "Xbox 360":
                icon =  <FaXbox key={k} alt={shape}/>
                break;
            case "PC":
            case "Steam":
                icon = <FaSteam key={k} alt={shape}/>
                break;
            case "Nintendo Switch":
                icon = <SiNintendoswitch key={k}/>
                break;
            case shape.includes("iOS"):
                icon = <FaApple key={k} alt={shape}/>
                break;
            default:
                icon = <FaGamepad key={k} alt={shape}/>;
                break;
        }
        return <Popup 
            header = {shape}
            key = {k}
            trigger = {icon}
            style = {style}
            position = 'bottom center'
            offset = {[0, 10]}
            />;
    }

    const ratingHandler = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++){
            (i < Math.floor(rating)) ? stars.push(<AiFillStar key={i}/>) : stars.push(<AiOutlineStar key={i}/>);
        }
        return stars;
    };

    return(
        <CardStyled layoutId={ parseInt(data.id) } className="outside" onClick={detailHandler}>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <motion.h3>{data.name}</motion.h3>
                        <p>Rating {data.rating}</p>
                        {ratingHandler(data.rating)}
                    </div>
                    <div className="platforms">
                    <h3>Platforms</h3>
                        {loaded && data.platforms.map(({platform}) => iconHandler(platform.name.toString(), platform.id))}
                    </div>       
                </div>
                <div className="media">
                    <motion.img layoutId={ `img ${parseInt(data.id)}` } src={resizeImg(data.background_image)} alt={data.background_image} />
                </div>

                <p>{data.description_raw}</p>

                <div className="gallery">
                    {images.results && images.results.map(result => <img src={resizeImg(result.image)} alt={result.image} key={result.id}/>)}
                </div>
            </Detail>
        </CardStyled>
    );
}

const CardStyled = styled(motion.div)`
    width: 100%;
    position: fixed;
    min-height: 100vh;
    background: rgb(0, 0, 0, 0.5);
    overflow-y: scroll;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        /* background-color: #E33E5E; */
        background-color: #50B6F2;

    }
    &::-webkit-scrollbar-track{
        background: black;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: black;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
        padding: 2rem 0;
    }
    svg{
        color: white;
    }
    p{
        padding: 2rem 0;
        font-size: 1.2rem;
        letter-spacing: 1px;
        word-spacing: 4px;
        line-height: 1.6;
    }

    .stats{
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        h3{
            padding: 1rem 0;
            font-size: 1.6rem;
         }
        p{
            padding: 1rem 0.2rem;
        }

        .rating{
            svg{
                font-size: 1.4rem;
            }
        }
        .platforms{
            h3{
                padding: 1rem 0;
                font-size: 1.6rem;
            }
            p{
                padding: 1rem 0.2rem;
            }
            svg{
                font-size: 2.2rem;
                padding: 0 0.2rem;
            }
        }
    }
`;


export default GameDetail;