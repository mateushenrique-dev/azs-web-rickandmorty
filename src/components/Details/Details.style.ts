import styled, { css } from "styled-components";
import { IEpisode } from '../../interfaces';

/* interface IDetailsProps {
  actualEpisode: IEpisode
} */

const Details = styled.article`
  background: #181829;
  margin: 32px;
  padding: 24px;
  border-radius: 8px;
`;


const Name = styled.h2`
  color: #fff;
  font-size: 21px;

  margin-bottom: 8px;
`;

const EpisodeNumber = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

const AirDate = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

export default {
  Details,
  Name,
  EpisodeNumber,
  AirDate,
};
