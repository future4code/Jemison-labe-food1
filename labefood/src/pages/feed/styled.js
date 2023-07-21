import styled from "styled-components";

export const Search = styled.div`
position: relative;
img {
    position: absolute;
    top: 1rem;
    left: 1rem;
}
input {
    padding-left: 3rem;
}
`

export const Input = styled.div`
border-radius: 2px;
:focus {
    border-color: #b8b8b8;
}
`
export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    height: 42px;
    overflow: auto;    
       
    ::-webkit-scrollbar{
         background-color: white;
    }
    button{
        width: 87px;
        height: 18px;
        font-size: 16px;
        background-color: white;
        border: 0 solid white;
        margin: 15px 10px 10px 33px;
        :active {
            color: orange;
        }
        :hover{
            color: orange;
        }
       
    }
    `
    export const DivTab = styled.div`
    position:fixed;
    bottom: 0;
    `;