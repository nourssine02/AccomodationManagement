import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: 'Lora', serif; 
    }

 

    html , body{
        overflow-x: hidden;
    }
    .defaultHero,
    .roomsHero {
    min-height: calc(100vh - 66px);
    background: url("./images/defaultBcg.jpeg") center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .roomsHero {
    background-image: url("./images/room-2.jpeg");
    min-height: 60vh;
    }
`;


export default GlobalStyle