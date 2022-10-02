import styled from "styled-components";

export const Logout = styled.button`
display: flex;
width:60vw;
height:5vh;
border: 3px solid;
background-color:red;
color: black;
align-self: center;
justify-content:center;
margin:30px;
`;

export const Bar = styled.div `
    width: 100vw;
    justify-content: center;
    height: 64px;
    margin: 0 0 16px ;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    

`
export const Title = styled.div `
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex: 0 1 728px;
        min-width: 0px;
`

export const ImgBack = styled.img `
        display: flex;
        flex-direction: row;
        width: 10vw;
        height: 24px;
        margin: 14px 54px 10px 16px;
        object-fit: contain;

`

export const Ghost = styled.div `
        width: 24px;
        height: 24px;
        margin: 10px 54px 10px 16px;
        object-fit: contain;

`

