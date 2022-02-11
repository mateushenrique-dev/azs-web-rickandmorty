import { ICharacter } from '../../../interfaces'
import Character from './Character'
import Style from "./Characters.style"

interface ICharacters {
  characters: ICharacter[]
}

function Characters({ characters }: ICharacters) {

  return (
    <Style.Characters>
      <Style.Title>Personagens</Style.Title>
      <Style.Container>
        {characters.map(character => <Character {...character} key={character.id} />)}
      </Style.Container>
    </Style.Characters>
  )
}

export default Characters