export interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface IEpisode {
  id: string;
  episode: string;
  name: string;
  air_date: string;
  characters: ICharacter[];
}