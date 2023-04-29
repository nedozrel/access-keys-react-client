import { useEffect, useState } from 'react';
import KeysTable from './KeysTable';
import KeyCreateForm from './KeyCreateForm';
import '../css/App.css';
import axios from 'axios';

const API_PORT = process.env.REACT_APP_API_PORT;

function App() {
  const [keys, setKeys] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:${API_PORT}/api/keys`);
      setKeys(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteKey = async (keyId) => {
    try {
      await axios.delete(`http://localhost:${API_PORT}/api/keys/${keyId}`);
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const addKey = async (title, expiration) => {
    await axios.post(`http://localhost:${API_PORT}/api/keys`, {
      title: title,
      expiresInHours: expiration,
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <KeyCreateForm addKey={addKey}/>
      <KeysTable keys={keys} deleteKey={deleteKey}/>
    </div>
  );
}

export default App;
