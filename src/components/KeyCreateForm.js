import { useState } from 'react';

function KeyCreateForm({addKey}) {
  const [keyTitle, setKeyTitle] = useState('');
  const [keyExpiration, setKeyExpiration] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    addKey(keyTitle, keyExpiration)
    console.log(keyTitle, keyExpiration)
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={'Название ключа'}
        onChange={e => setKeyTitle(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Срок действия в часах"
        onChange={e => setKeyExpiration(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default KeyCreateForm;
