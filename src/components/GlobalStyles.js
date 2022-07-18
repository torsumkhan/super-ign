import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem
    }

    &::-webkit-scrollbar-thumb{
        background-color: #fbc730
    }
}
body {
        background-color: #151515;
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%
    }
h2{
        font-size: 3rem;
        font-weight: lighter;
    }
h3{
        font-size: 24px;
        line-height: 28px;
        padding: 1.4rem 0rem;
    }
p{
        font-size: 0.8rem;
        line-height: 200%;
        color: lightgray;
    }
    img{
        display: block;
    }
}
`;

export default GlobalStyles;
