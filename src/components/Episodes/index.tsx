import { useEpisodesContext } from '../../context/EpisodesContext'
import { useFilterContext } from '../../context/FilterContext';
import Filter from '../Filter';
import Loading from '../Loading';
import Episode from './Episode'
import Style from "./Episodes.style"
import NoResults from './NoResults';

function Episodes() {
  const { episodes, loading } = useEpisodesContext();
  const { filter } = useFilterContext()

  if (loading) return <Loading />

  const episodesFiltered = episodes.filter(episode => filter(episode))

  console.log(episodesFiltered)

  return (
    <>
      <Filter />
      <Style.Episodes>
        {episodesFiltered.length ? episodesFiltered.map(episode => <Episode {...episode} key={episode.id} />) : (<NoResults />)}
      </Style.Episodes>
    </>

  )
}

export default Episodes