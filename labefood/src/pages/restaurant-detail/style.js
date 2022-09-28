import styled from 'styled-components'

export const Main = styled.div`
margin:16px;
font-family: Roboto;
letter-spacing: -0.39px;
`;
export const Restaurant = styled.div`
display:flex;
flex-direction: column;
img{
 justify-self: center;
 align-self: center;

width:92vw;
height:25vh;
border:solid 1px;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
border-color: lightgray;
}
h1{
    color:#E86E5A;
    size:16px;
}
p{
    color:#B8B8B8;
}
`;

export const Shipping = styled.div`
display: flex;
p{
    margin-right:10%;
  }
`;
export const Menu = styled.div`
 margin-top:15px;
 margin-bottom:15px;
 hr{
    border-top: 2px solid black;
 }
 `;


export const Product = styled.div`
display:flex;
border:1px solid #B8B8B8;
margin-bottom:8px;
margin-top:8px;
border-radius: 10px;

img{
    width:97px;
    height:112px;
    object-fit:cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
`;

export const Description = styled.div`
display:flex;
flex-direction: column;
padding-right:17px;
padding-left:117px;
padding-top:13px;
position: absolute;

h1{
    color:#E86E5A;
    size:16px;
}
h2{
    color:#B8B8B8;
    font-size:12px;
    letter-spacing: -0.34px;
}

`;

export const AddBtn = styled.button`
    border: 1px solid black;
    font-size:12px;
    align-self: flex-end;
    justify-self:flex-end;
    width: 90px;
    height:31px;
    margin-left:50vw;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    `;