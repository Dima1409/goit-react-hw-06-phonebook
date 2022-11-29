import {useState, useEffect} from 'react';
import useLocalStorage from 'hooks/useLocalStarage';
import ListContact from "components/ListContact/ListContact";
import SearchInput from "components/SearchInput/SearchInput";
import ContactsForm from "components/Form/Form";
import { ContainerList, ListTitle, FormTitle, ListIsEmpty } from "./App.styled";


const LOCAL_KEY_CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

   useEffect(()=>{
    localStorage.setItem(LOCAL_KEY_CONTACTS, JSON.stringify(contacts))
   },[contacts])

   const onChangeFiltered = e => {
    setFilter(e.currentTarget.value)
   }
   const getSortByFilter = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(elem=>elem.name.toLowerCase().includes(normalizedValue))
   }
   const onDeleteItem = itemId => {
    setContacts(contacts.filter(elem=>elem.id !== itemId))
  }
   const submitForm = (data) => {
    const {name} = data;
    const someCopyItem = contacts.some((elem)=>elem.name.toLowerCase()===name.toLowerCase());
    if(someCopyItem) {
    return alert(`${name} is already in contacts`);
    }
    const newListContact = [...contacts, data];
    return setContacts(newListContact);
   }
   return (
          <>
          <FormTitle>Phonebook</FormTitle>
          <ContactsForm onSubmit={submitForm}></ContactsForm>
          <ContainerList>
          <ListTitle>Contacts</ListTitle>
          {contacts.length > 0 ? <SearchInput value={filter} onChangeFilter={onChangeFiltered}></SearchInput> : <ListIsEmpty>Your list is empty... Please add a new contact</ListIsEmpty>}
          <ListContact contactsItem={getSortByFilter()} deleteItem={onDeleteItem}></ListContact>
          </ContainerList>
          </>
        )
}


