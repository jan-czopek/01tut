import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
          ...item,
          checked: !item.checked,
        }
        : item
    );

    setAndSaveItems(listItems)
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  };

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const addItemAction = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = { id, checked: false, item }
    const listItems = [...items, newItem]
    setAndSaveItems(listItems)
  }

  return (
    <div className="App">
      <Header title="Title" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        addItemAction={addItemAction}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
