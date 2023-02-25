import styled from "styled-components";

export const PostsWrapp = styled.div`
  width: 100%;
`;

export const PostList = styled.ul`
  width: 100%;
  column-count: 4;
  column-gap: 20px;

  @media screen and (max-width: 1100px) {
    column-count: 3;
  }

  @media screen and (max-width: 868px) {
    column-count: 2;
    padding: 0 5%;
  }

  @media screen and (max-width: 670px) {
    column-count: 1;
  }
`;
