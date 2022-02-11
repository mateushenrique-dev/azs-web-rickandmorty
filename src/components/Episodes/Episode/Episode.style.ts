import styled from 'styled-components'

const Episode = styled.li`
  padding: 24px;

  background: #181829;
  border-radius: 8px;
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background: #1f1f30;
  }

  a {
    text-decoration: none;
  }
`;

const Name = styled.h2`
  color: #fff;
  font-size: 18px;
`;

const Details = styled.div`
  margin-top: 24px;
  

  color: rgba(255, 255, 255, 0.5);
`;

const AirDate = styled.p`
  margin-bottom: 8px;
`;

const CharactersQuantity = styled.p``

export default {
  Episode,
  Name,
  Details,
  AirDate,
  CharactersQuantity,
};