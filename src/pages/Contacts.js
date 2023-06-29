import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1> 
         <ContactForm />
         {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      {contacts.length > 1 && (<Filter/>)}
      {contacts.length > 0 ? ( <ContactList/>): (<p>Your phonebook is empty.</p>)}
  </Container>
)
}
