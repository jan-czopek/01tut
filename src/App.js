import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import apiRequest from "./apiReaques";

function App() {
  const API_URL = 'http://localhost:3500/items';

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   localStorage.setItem('shoppingList', JSON.stringify(items));
  // }, [items]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Nie pobrano danych!');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
  }, []);

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
          ...item,
          checked: !item.checked,
        }
        : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const addItemAction = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const listItems = [...items, newItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  return (
    <div className="App">
      <Header title="Title" />
      <main>
        {isLoading && <p>Wczytuję dane...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            addItemAction={addItemAction}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
