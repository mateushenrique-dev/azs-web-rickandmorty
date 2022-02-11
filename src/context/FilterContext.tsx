import { createContext, useContext, useState } from 'react';
import { IEpisode } from '../interfaces';
import { useEpisodesContext } from './EpisodesContext';


interface IFilterProps {
  children: any;
}

interface IFilterContext {
  filter: (episode: IEpisode) => boolean;
  handleChangeFilterName: (event: any) => void;
  handleChangeFilterFavorite: () => void;
  filterName: string;
  filterFavorite: boolean;
}

const MyContext = createContext<IFilterContext>({} as IFilterContext)

export function FilterContextProvider({ children }: IFilterProps) {
  const [filterName, setFilterName] = useState("")
  const [filterFavorite, setFilterFavorite] = useState(false)
  const { favoriteEpisodes } = useEpisodesContext()

  function handleChangeFilterName(event: any) {
    const { value } = event.target;

    setFilterName(value)
  }
  function handleChangeFilterFavorite() {
    setFilterFavorite(favorite => !favorite)
  }

  function lowerAndTrim(text: string) {
    return text.toLowerCase().trim()
  }

  function filter(episode: IEpisode) {
    if (filterName) return lowerAndTrim(episode.name).startsWith(lowerAndTrim(filterName))
    if (filterFavorite) return favoriteEpisodes.includes(episode.id)

    return true
  }

  return (
    <MyContext.Provider value={{
      handleChangeFilterName,
      handleChangeFilterFavorite,
      filter,
      filterFavorite,
      filterName
    }}>
      {children}
    </MyContext.Provider>
  )
}

export function useFilterContext() {
  return useContext(MyContext)
}