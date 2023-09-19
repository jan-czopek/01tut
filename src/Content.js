import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  ListItemButton,
  ListItem,
  ListItemText,
  TextField
} from '@mui/material'
import { Delete as DeleteIcon, Add as AddIcon} from '@mui/icons-material';

function Content({ items, handleCheck, handleDelete, newItem, setNewItem, handeleSubmit }) {
  return (
    <main>
      <TextField
          required
          id="addItem"
          defaultValue={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <IconButton>
          <AddIcon />
        </IconButton>
      <FormGroup>
        {items.map((item) => (          
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
        ))}
      </FormGroup>
    </main>
  );
}

export default Content;
