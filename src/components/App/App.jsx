import ListContact from "components/ListContact/ListContact";
import SearchInput from "components/SearchInput/SearchInput";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import ContactsForm from "components/Form/Form";
import { ContainerList, ListTitle, FormTitle, ListIsEmpty } from "./App.styled";


export const App = () => {
  const contacts = useSelector(getContacts)
   return (
          <>
          <FormTitle>Phonebook</FormTitle>
          <ContactsForm></ContactsForm>
          <ContainerList>
          <ListTitle>Contacts</ListTitle>
          {contacts.length > 0 ? <SearchInput></SearchInput> : <ListIsEmpty>Your list is empty... Please add a new contact</ListIsEmpty>}
          <ListContact></ListContact>
          </ContainerList>
          </>
        )
}


