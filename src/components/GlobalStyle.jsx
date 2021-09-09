import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        ${'' /* --primary: #E33E5E; */}
        --bg: #111111;
        --lighter: #FCF8FF;

        --primary: #50B6F2;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        ${'' /* background-color: #E33E5E; */}
        background-color: #50B6F2;
    }
    &::-webkit-scrollbar-track{
        background: black;
    }   
    body{
        background: var(--bg);
        width: 100%;
    }

    img{
        display: block;
    }

    h1, h2, h3, p{
        font-family: 'Orbitron', sans-serif;
        color: var(--primary);
    }
    p{
        color: var(--lighter);
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;