import KeyTableRow from './KeyTableRow';
import '../css/KeysTable.css';

function KeysTable({keys, deleteKey}) {
  return (
    <table className={'keys-table'}>
      <tr>
        <th>Title</th>
        <th>Key</th>
        <th>Delete</th>
      </tr>
      {keys ? keys.map((keyObj) => (
        <KeyTableRow key={keyObj.id} keyObj={keyObj} deleteKey={deleteKey}/>
      )) : 'Loading...'}
    </table>
  );
}

export default KeysTable;
