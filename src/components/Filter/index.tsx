import { useEpisodesContext } from '../../context/EpisodesContext'
import { useFilterContext } from '../../context/FilterContext';
import Style from "./Filter.style"

function Filter() {
  const { filterName, handleChangeFilterName, handleChangeFilterFavorite, filterFavorite } = useFilterContext();

  return (
    <Style.Filter>
      <Style.FilterByName onChange={handleChangeFilterName} value={filterName} />
      <Style.FilterByFavorites onClick={handleChangeFilterFavorite} filtering={filterFavorite}>
        Favoritos
      </Style.FilterByFavorites>
    </Style.Filter>
  )
}

export default Filter