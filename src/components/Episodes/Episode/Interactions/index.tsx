import Style from "./Interactions.style"
import { useEpisodesContext } from '../../../../context/EpisodesContext'
import { IEpisode } from '../../../../interfaces'

interface IInteractionsProps {
  episode: IEpisode
}

function Interactions({ episode }: IInteractionsProps) {

  const { favoriteEpisodes, viewedEpisodes, handleFavoriteEpisode } = useEpisodesContext()
  
  return (
    <Style.Interactions>
      <Style.FavoriteStar
        favorites={favoriteEpisodes} 
        episode={episode}
        size={32}
        onClick={() => handleFavoriteEpisode(episode.id)}
      />

      <Style.ViewedEye
        vieweds={viewedEpisodes}
        episode={episode}
        size={32}
      />
    </Style.Interactions>
  )
}

export default Interactions