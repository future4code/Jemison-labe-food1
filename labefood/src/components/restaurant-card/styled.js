import styled from "styled-components";

export const RestaurantCardContainer = styled.div`
width: 360px;
height: 196px;
padding: 8px 16px 0;
`;
export const Rectangle = styled.div`
width: 328px;
height: 188px;
padding: 0 0 16px;
border-radius: 8px;
border: solid 1px gray;
`;

export const ImageCard = styled.img`
width: 328px;
height: 120px;
margin: 0 0 12px;
`;

export const NameRestaurant = styled.p`
width: 296px;
height: 18px;
margin: 12px 16px 4px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: darkorange;
`;

export const DeliveryTime = styled.p`
width: 148px;
height: 18px;
margin: 4px 8px 0 16px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: grey;
`;

export const Shipping = styled.p`
width: 140px;
height: 18px;
margin: 4px 16px 0 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: right;
color: grey;
`;

export const TimeShipping = styled.div`
display: flex;
justify-content: space-between;
`;