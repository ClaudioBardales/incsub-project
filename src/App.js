import React from "react";
import Forms from "./components/forms"
import Dummy from "./components/dummyHeading";
import Styled from "styled-components";

const App = () => {
  return (
    <Container>
        <Forms />
        <Dummy />
    </Container>
  );
}

const Container = Styled.div`
background-color: #276efa;
min-height: 100vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

export default App;
