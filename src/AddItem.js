import {
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useState } from 'react';

const AddItem = ({ addItemAction, validExpression, errorMessage }) => {
  const [validation, setValidation] = useState(validExpression.test(''))
  const validate = (value) => {
    setValidation(validExpression.test(value))
    setNewItem(value)
  }
  const [newItem, setNewItem] = useState('')

  const addItem = (newItem) => {
    setNewItem('');
    setValidation(validExpression.test(''));
    addItemAction(newItem);
  }
  return (
    <TextField
      error={validation ? false : true}
      label={validation ? null : errorMessage}
      id="addItem"
      value={newItem}
      onChange={(e) => validate(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled={!validation} onClick={() => addItem(newItem)}>
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

AddItem.defaultProps = {
  validExpression: /.{0,}/,
  errorMessage: null
};

export default AddItem