import styled from "styled-components";

import rick from "../../../assets/rickheadbad.png";

const NoResults = styled.div`
  width: 100vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  margin-top: 64px;
`;

const Rick = styled.img.attrs({
  src: rick,
  alt: "Rick",
})`
  width: 20%;
`;

export default {
  NoResults,
  Text,
  Rick,
};
