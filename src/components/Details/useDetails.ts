import { GET_EPISODE } from "./../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { useEffect } from "react";
import { useEpisodesContext } from "../../context/EpisodesContext";

function useDetails() {
  const { episodeId } = useParams();
  const navigate = useNavigate();
  const episodeIdNumber = episodeId && parseInt(episodeId);
  const { handleViewEpisode } = useEpisodesContext();

  const { data, loading } = useQuery(GET_EPISODE, {
    variables: {
      episodeId: episodeIdNumber,
    },
  });

  useEffect(() => {
    handleViewEpisode(episodeId ? episodeId : "");
  }, []);

  function backToEpisodes() {
    navigate("../");
  }

  return {
    actualEpisode: loading ? {} : data.episode,
    loading,
    backToEpisodes,
    episodeId: episodeId ? episodeId : "",
  };
}

export default useDetails;
