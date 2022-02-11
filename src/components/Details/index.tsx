import Loading from '../Loading';
import Characters from './Characters'
import Style from "./Details.style"
import Interactions from './Interactions';
import useDetails from './useDetails'

function Details() {

  const { actualEpisode, loading, backToEpisodes, episodeId } = useDetails()
  
  if (loading) return <Loading />
  
  const { name, episode, characters, air_date } = actualEpisode

  return (
    <Style.Details>
      <div>
        <Interactions
          backToEpisodes={backToEpisodes}
          episodeId={episodeId}
        />
        <Style.Name>{name}</Style.Name>
        <Style.EpisodeNumber>Número do episódio: {episode}</Style.EpisodeNumber>
        <Style.AirDate>Data de Lançamento: {air_date}</Style.AirDate>
      </div>
      <Characters characters={characters} />
    </Style.Details>
  )
}

export default Details