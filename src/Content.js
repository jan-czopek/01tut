import AddItem from './AddItem'
import ItemList from './ItemList';
import SearchItem from './SearchItem';
import { useState } from 'react'

function Content({ items, handleCheck, handleDelete, addItemAction }) {
  const [search, setSearch] = useState('');
  return (
    <main>
      <AddItem addItemAction={addItemAction} validExpression={/.{3,}/} errorMessage={"At least 3 characters"} />
      <SearchItem search={search} setSearch={setSearch} />
      <ItemList items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  );
}

export default Content;
