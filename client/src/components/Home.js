import React, {useState, useEffect, useContext} from "react";
import Axios from "axios";
import {AuthContext} from "../providers/AuthProvider" 
import {Card} from "semantic-ui-react"
import styled from "styled-components";

const Home = () => {
  const {bets, setBets} = useState([]);
  const authContext = useContext(AuthContext);
  const getBets = async () => {
    try {
      let res = await Axios.get(`/api/users/${authContext.user.id}/bets`)
      const stateBets = res.data.map((c) => {
        return
      })
    }catch (error) {
     alert("Error getting bets");
    }
  }

  useEffect(() => {
    getBets();
  }, []);

  return(
    <>
      <Wrapper>
        <h1>Here is where I want a list of bets to go</h1>
        <Card>
          Card Info
        </Card>
        <Card>
          Card Info
        </Card>
        <Card>
          Card Info
        </Card>
      </Wrapper>
      <WrapperDos>
        Here is where I want wins and losses to go
      </WrapperDos>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const WrapperDos = styled.div`
  display: flex;
`


export default Home;
