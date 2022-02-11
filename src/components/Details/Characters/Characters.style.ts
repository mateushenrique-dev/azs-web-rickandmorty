import styled from 'styled-components'

const Characters = styled.div`
  margin-top: 32px;

`

const Title = styled.h2`
  color: #fff;
  font-size: 21px;
`;

const Container = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export default {
  Characters,
  Title,
  Container,
};