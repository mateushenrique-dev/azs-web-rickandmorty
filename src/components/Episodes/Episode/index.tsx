import { Link } from 'react-router-dom'
import { IEpisode } from '../../../interfaces'
import Style from "./Episode.style"
import Interactions from './Interactions'

function Episode(episodeData: IEpisode) {

  const { air_date, characters, episode, name, id } = episodeData

  return (
    <Style.Episode>
      <Interactions episode={episodeData} />
      <Link to={`/episode/${id}`}>
        <Style.Name>{episode} - {name}</Style.Name>
        <Style.Details>
          <Style.AirDate>Data de lançamento: {air_date}</Style.AirDate>
          <Style.CharactersQuantity>Personagens: {characters.length}</Style.CharactersQuantity>
        </Style.Details>
      </Link>
    </Style.Episode>
  )
}

export default Episode