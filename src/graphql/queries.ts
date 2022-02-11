import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query {
    episodes {
      info {
        pages
        next
        prev
      }
      results {
        id
        episode
        name
        air_date
        characters {
          id
          name
          image
          status
          species
        }
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($episodeId: ID!) {
    episode(id: $episodeId)  {
      id
      name
      episode
      air_date
      characters {
        id
        image
        species
        status
        name
      }
    }
  }
`;
