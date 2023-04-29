import KeyTableRow from './KeyTableRow';
import '../css/KeysTable.css';

function KeysTable({keys, deleteKey}) {
  return (
    <table className={'keys-table'}>
      <tbody>
      <tr>
        <th>Title</th>
        <th>Key</th>
        <th>Delete</th>
      </tr>
      {keys ? keys.map((keyObj) => (
        <KeyTableRow key={keyObj.id} keyObj={keyObj} deleteKey={deleteKey}/>
      )) : <tr><td>Loading...</td></tr>}
      </tbody>
    </table>
  );
}

export default KeysTable;
