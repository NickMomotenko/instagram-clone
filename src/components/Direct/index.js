import React from "react";
import { Block } from "../../UI/Layout";
import Container from "../Container";
import Header from "../Header";

import { DirectWrapp, DirectContent } from "./styles";

const Direct = () => {
  return (
    <DirectWrapp>
      <Container>
        <Header />
        <DirectContent>
          <Block>
            
          </Block>
        </DirectContent>
      </Container>
    </DirectWrapp>
  );
};

export default Direct;
