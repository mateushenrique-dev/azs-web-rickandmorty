import styled from 'styled-components';

const Episodes = styled.main`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  margin: 0 32px;

  padding-bottom: 32px;
`;

export default {
  Episodes,
};