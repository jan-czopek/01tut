import {
  Checkbox,
  ListItemButton,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material';

const Item = ({ item, handleCheck, handleDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <Checkbox
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
        />
      }
      label={item.item}
    >
      <ListItemText
        primary={item.item}
      />
      <ListItemButton onClick={() => handleDelete(item.id)}>
        <DeleteIcon />
      </ListItemButton>
    </ListItem>
  )
}

export default Item