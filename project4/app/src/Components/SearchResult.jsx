import React from 'react'
import styled from 'styled-components';
import { FETCH_URL } from '../App';
import Button from './Button';
const SearchResult = ({data}) => {
  return (
      <FoodContainer>
        <FoodCards>
            {data?.map((food) => {
                 return  <FoodCard  key={food.name}>
                       <div className="foodimg">
                          <img src={FETCH_URL+ food.image} alt="foods" />
                       </div>
                        <div className="foodtext">
                                <div className="info">
                                  <h1>{food.name}</h1>
                                  <p>{food.text}</p>
                                </div>
                                <Button text={"$"+food.price.toFixed(2)}/>
                        </div>
                 </FoodCard>
            })}
        </FoodCards>
      </FoodContainer>
  )
}

export default SearchResult;

const FoodContainer = styled.section`
`;

const FoodCards = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(2,1fr);
grid-gap:10px;
.foodtext .info{
   display:flex;
    flex-direction: column;
    margin-top:20px;
    gap:6px;
}
    .foodtext{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    }
    Button{
    margin:10px;}
h1{
font-size: 16px;
}
p{
font-size: 12px;}

`;
const FoodCard = styled.div`
border: 1px solid white;
border-radius: 12px;
color: white;
display: flex;
img{
width:133px;
height: 133px;
}
`;