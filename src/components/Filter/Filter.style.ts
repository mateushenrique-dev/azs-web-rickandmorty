import styled, { css } from 'styled-components'

const Filter = styled.section`
  padding: 32px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

interface IFilter {
  filtering: boolean;
}

const FilterByName = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: #181829;
  color: #fff;
  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const FilterByFavorites = styled.button`
  padding: 8px 12px;
  background: #181829;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${({ filtering }: IFilter) => {
    if (filtering)
      return css`
        color: yellow;
      `;
  }}

  @media (max-width: 400px) {
    width: 100%;
  }

  &:hover {
    background: #1f1f30;
  }
`;


export default {
  Filter,
  FilterByName,
  FilterByFavorites,
};