import { ICharacter } from '../../../../interfaces'
import Style from "./Character.style"

function Character({ name, image, species, status }: ICharacter) {
  return (
    <Style.Character>
      <Style.Image src={image} />
      <Style.Name>Nome: {name}</Style.Name>
      <Style.Status>Status: {status}</Style.Status>
      <Style.Specie>Espécie: {species}</Style.Specie>
    </Style.Character>
  )
}

export default Character