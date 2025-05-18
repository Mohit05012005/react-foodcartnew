import styled from "styled-components";
import Button from "./Components/Button";
export const FETCH_URL = "http://localhost:9000";
import { useEffect } from "react";
import { useState } from "react";
import SearchResult from "./Components/SearchResult";
const App = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [err,setError] = useState(null);
  const [fillter, setFilter] = useState(null);
  useEffect(() => {
    try {
      const fetch_fun = async () => {
        setLoading(true);
        const response = await fetch(FETCH_URL);
        const dataa = await response.json();
        setData(dataa);
        setFilter(dataa);
        setLoading(false);
      };
      fetch_fun();
    } catch (err) {
           setError("there is an error in fetching data");
    }
  }, []);

  if(err){
    return <div>{err}</div>;
  }
  if(loading){
    return <div>Loading...</div>;
  }
function filterthedata(e) {
  const value = e.target.value;
  console.log(value);
  if(value === ""){
          setFilter(data);
          return;
  }
     const anst =  fillter.filter((food) => food.name.toLowerCase().includes(value.toLowerCase()));
     setFilter(anst);
}
const handleClick = (e) => {
  const value = e.target.innerText;
  console.log(value);
  if (value === "All") {
    setFilter(data);
  } else {
    console.log(value);
        const anst =  data.filter((food) => food.type.toLowerCase().includes(value.toLowerCase()));
    setFilter(anst);
  }

}

  return (
    <MainContainer>
      <Container>
        <div className="toplogo">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={filterthedata} type="text" placeholder="Search Food..." />
          </div>
        </div>

        <div className="btnsContainer">
          <Button onClick={handleClick} text="All" />
          <Button onClick={handleClick} text="Breakfast" />
          <Button onClick={handleClick} text="Lunch" />
          <Button onClick={handleClick} text="Dinner" />
        </div>
      </Container>
      <SearchResult data={fillter} />
    </MainContainer>
  );
};

export default App;
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.section`
  .toplogo {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
  }
  //   @media (max-width: 500px) {
  // .toplogo{
  //   flex-direction: column;
  // }

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      padding: 0 10px;
      width: 285px;
      height: 40px;
    }
  }
  .btnsContainer {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    gap: 20px;
  }
`;

