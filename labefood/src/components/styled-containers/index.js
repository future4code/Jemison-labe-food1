import styled from "styled-components";

export const MainContainer = styled.div`
 height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: Roboto;
    padding-bottom:0;
    p{
      font-size:12px;
      margin-top:-10px;
      margin-left:3vw;
    }
    img{
    margin-top:25px;
    margin-bottom: 25px;
}
    form{
        display:flex;
        flex-direction:column;
        align-items: center;
        margin-bottom:0;
        padding-bottom:0;
    }
    input {
  border: 1px solid lightgray;
  position: relative;
  border-radius:5px;
  width: 88vw;
  margin: 10px;
  line-height: 6ex;
  padding-left:20px;
  ::placeholder{
    color:lightgray;
    font-size:15px;
    }
}


pre {
  position: absolute;
  top: 0.2ex;
  z-index: 1;
  left: 2em;
  background-color: white;
  padding: 0 5px;
  color:lightgray;
  font-size:12px; 
}
`;

export const EnterBtn = styled.button`
background-color: #e86e5a;
width: 88vw;
height:6vh;
font-weight: bold;
margin-top:20px;
`;
export const SignupBtn = styled.button`
width: 88vw;
min-height:6vh;
max-height: 6vh;
margin-top:20px;
`;