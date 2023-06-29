import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlise';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        name="search"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

export default Filter;
