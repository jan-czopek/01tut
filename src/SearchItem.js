import {
  TextField
} from '@mui/material';

const SearchItem = ({ search, setSearch }) => {
  return (
    <TextField
      label='Search'
      id="searchItem"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchItem