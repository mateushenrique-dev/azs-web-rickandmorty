import { useEpisodesContext } from '../../context/EpisodesContext'
import { useFilterContext } from '../../context/FilterContext';
import Filter from '../Filter';
import Loading from '../Loading';
import Episode from './Episode'
import Style from "./Episodes.style"

function Episodes() {
  const { episodes, loading } = useEpisodesContext();
  const { filter } = useFilterContext()

  if(loading) return <Loading />

  return (
    <>
      <Filter />
      <Style.Episodes>
        {episodes.filter(episode => filter(episode)).map(episode => <Episode {...episode} key={episode.id} />)}
      </Style.Episodes>
    </>

  )
}

export default Episodes