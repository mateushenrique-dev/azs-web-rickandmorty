import styled, { keyframes } from 'styled-components'
import Rick from "../../assets/rickhead.png"

const Loading = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;

`

const rotationAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const RickHead = styled.img.attrs({
  src: Rick,
  alt: "Rick Head Loading",
})`
  width: 10%;
  animation: ${rotationAnimation} 1s infinite;
`;


export default {
  Loading,
  RickHead
}