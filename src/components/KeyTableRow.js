import '../css/KeyTableRow.css';

function KeyTableRow({keyObj, deleteKey}) {
  const handleDelete = () => {
    deleteKey(keyObj.id);
  };

  return (
    <tr className={`key keys-table__item key_expired_${keyObj.expired}`} key={keyObj.id}>
      <td className={'key__title'}>
        {keyObj.title}
      </td>
      <td>
        {keyObj.id}
      </td>
      <td className={'key__delete-btn-cnt'}>
        <button
          className={'delete-btn key__delete-btn'}
          onClick={handleDelete}
        >X
        </button>
      </td>
    </tr>
  );
}

export default KeyTableRow;
