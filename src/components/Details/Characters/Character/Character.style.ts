import styled from "styled-components";

const Character = styled.li`
  background: #242434;
  padding: 18px;
  border-radius: 8px;

  color: #fff;
  text-align: center;
`;

const Image = styled.img`
  width: 70px;
  border-radius: 8px;
  margin-bottom: 12px;
`

const Name = styled.p`
  margin-bottom: 8px;
`;

const Status = styled.p`
  margin-bottom: 8px;
`;

const Specie = styled.p`

`;

export default {
  Character,
  Name,
  Status,
  Specie,
  Image
};
