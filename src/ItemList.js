import {
  FormGroup
} from '@mui/material'
import Item from './Item';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <FormGroup>
      {items.map((item) => (
        <Item key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
      ))}
    </FormGroup>
  )
}

export default ItemList