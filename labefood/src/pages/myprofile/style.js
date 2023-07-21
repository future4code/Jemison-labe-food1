import styled from 'styled-components';

export const Main = styled.div`
margin:0;
padding:0;
font-family: Roboto;
font-size: 16px;
`;

export const ProfileData = styled.div`
display: flex;
width: 100vh;
padding:18px;
div{
    width:80vw;

}
button{
   align-self:flex-start ;
   justify-content: flex-end;
   width:40px;
   height:40px;
   }
img{
    margin-left:9px;
}
`;

export const AddressInfo = styled.div`
padding:16px;
background-color:#EEEEEE;
display: flex;
width: 100vh;
div{
        width:80vw;

    }

h1{
    font-size:16px;
    color:#B8B8B8;

  
}
button{
   align-self:flex-start ;
   justify-content: flex-end;
   width:40px;
   height:40px;
   }
img{
    margin-left:9px;
}
`;

export const OrderHistory = styled.div`
padding:16px;
font-size: 16px;
hr{
    border-top: 2px solid black;
    margin:4px;
    size:100vw;
    margin-left:-2px;
    margin-right:--2px;
}
`;




