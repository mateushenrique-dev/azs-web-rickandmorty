import styled, { css } from "styled-components";
import { IEpisode } from "../../../../interfaces";
import { AiFillEye, AiOutlineStar } from "react-icons/ai";

interface IFavoriteStarProps {
  episode: IEpisode;
  favorites: string[];
}

interface IViewedProps {
  vieweds: string[];
  episode: IEpisode;
}

const ViewedEye = styled(AiFillEye)`
  display: none;

  ${({ episode, vieweds }: IViewedProps) => {
    if (vieweds.includes(episode.id)) {
      return css`
        display: block;
      `;
    }
}}

`;

const FavoriteStar = styled(AiOutlineStar)`
  ${({ episode, favorites }: IFavoriteStarProps) => {
    if (favorites.includes(episode.id)) {
      return css`
        color: yellow;
      `;
    }
  }}

  &:hover {
    color: yellow;
  }
`;

const Interactions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

export default {
  Interactions,
  FavoriteStar,
  ViewedEye
};
