import styled, { css } from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

interface IInteractionsProps {
  favorites: string[];
  episode: string;
}

const Interactions = styled.div`
  margin-bottom: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;

  color: #fff;
  font-size: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

const FavoriteStar = styled(AiOutlineStar)`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: yellow;
  }

  ${({ favorites, episode }: IInteractionsProps) => {
    if (favorites.includes(episode)) {
      return css`
        color: yellow;
      `;
    }
  }}
`;

export default {
  Interactions,
  BackButton,
  FavoriteStar,
};
