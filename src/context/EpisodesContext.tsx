import { useQuery } from '@apollo/client';
import { createContext, EventHandler, useContext, useState } from 'react';
import { GET_EPISODES } from '../graphql/queries';
import { IEpisode } from '../interfaces';

interface IEpisodesProps {
  children: any;
}

interface IEpisodesContext {
  episodes: IEpisode[];
  loading: boolean;
  favoriteEpisodes: string[];
  viewedEpisodes: string[];
  handleFavoriteEpisode: (episodeId: string) => void;
  handleViewEpisode: (episodeId: string) => void;
}

const MyContext = createContext<IEpisodesContext>({} as IEpisodesContext);

export default function EpisodesContextProvider({ children }: IEpisodesProps) {
  const { data, loading } = useQuery(GET_EPISODES, {
    onCompleted() {
      loadFavoriteEpisode()
      loadViewedEpisodes()
    }
  });
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([""])
  const [viewedEpisodes, setViewedEpisodes] = useState([""])


  function handleFavoriteEpisode(episodeId: string) {
    const oldFavorites = localStorage.getItem("favorites_episodes")

    setFavoriteEpisodes(episodesId => [...episodesId, episodeId])

    if (oldFavorites) {

      const favoritesParsed = JSON.parse(oldFavorites)

      if (favoritesParsed.includes(episodeId)) {
        const indexOfFavorite = favoritesParsed.findIndex((favorite: string) => favorite === episodeId)
        favoritesParsed.splice(indexOfFavorite, 1)
      } else {
        favoritesParsed.push(episodeId)
      }

      setFavoriteEpisodes(favoritesParsed)
      const newFavorites = JSON.stringify(favoritesParsed)
      return localStorage.setItem("favorites_episodes", newFavorites)
    }

    const newFavorites = JSON.stringify([episodeId])
    return localStorage.setItem("favorites_episodes", newFavorites)
  }

  function handleViewEpisode(episodeId: string) {
    const oldFavorites = localStorage.getItem("viewed_episodes")
    let viewedEpisodesToLocal = [""]

    if (oldFavorites) {
      const viewedEpisodes = JSON.parse(oldFavorites)
      if (!viewedEpisodes.includes(episodeId)) {
        viewedEpisodes.push(episodeId)
      }
      viewedEpisodesToLocal = viewedEpisodes
    } else {
      viewedEpisodesToLocal = [episodeId]
    }

    setViewedEpisodes(viewedEpisodesToLocal)
    localStorage.setItem("viewed_episodes", JSON.stringify(viewedEpisodesToLocal))
  }

  function loadFavoriteEpisode() {
    const favoritesEpisodesFromLocalStorage = localStorage.getItem("favorites_episodes")

    if (favoritesEpisodesFromLocalStorage) {
      setFavoriteEpisodes(JSON.parse(favoritesEpisodesFromLocalStorage))
    }
  }

  function loadViewedEpisodes() {
    const viewedEpisodesFromLocalStorage = localStorage.getItem("viewed_episodes")

    if (viewedEpisodesFromLocalStorage) {
      setViewedEpisodes(JSON.parse(viewedEpisodesFromLocalStorage))
    }
  }

  return (
    <MyContext.Provider value={{
      episodes: data ? data.episodes.results : [],
      loading,
      favoriteEpisodes,
      viewedEpisodes,
      handleFavoriteEpisode,
      handleViewEpisode,
    }}>
      {children}
    </MyContext.Provider >
  )
}

export function useEpisodesContext() {
  return useContext(MyContext)
}