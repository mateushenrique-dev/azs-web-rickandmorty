import Style from "./Interactions.style"
import { AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai"
import { useEpisodesContext } from '../../../context/EpisodesContext'

interface IInteractionsProps {
  backToEpisodes: () => void;
  episodeId: string;
}

function Interactions({ backToEpisodes, episodeId }: IInteractionsProps) {

  const { handleFavoriteEpisode, favoriteEpisodes } = useEpisodesContext()

  return (
    <Style.Interactions>
      <Style.BackButton onClick={backToEpisodes}>
        <AiOutlineArrowLeft />
        Voltar
      </Style.BackButton>
      <Style.FavoriteStar
        episode={episodeId}
        favorites={favoriteEpisodes}
        onClick={() => handleFavoriteEpisode(episodeId)}
        size={24}
      />
    </Style.Interactions>
  )
}

export default Interactions 