import ListContact from 'components/ListContact/ListContact';
import SearchInput from 'components/SearchInput/SearchInput';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactsForm from 'components/Form/Form';
import ThemeBtn from 'components/ThemeBtn/ThemeBtn';
import {
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
} from './App.styled';

export const App = () => {
  const theme = useSelector(state => state.theme);

  const contacts = useSelector(getContacts);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <FormTitle>Phonebook</FormTitle>
        <ThemeBtn />
        <ContactsForm></ContactsForm>
        <ContainerList>
          <ListTitle>Contacts</ListTitle>
          {contacts.length > 0 ? (
            <SearchInput></SearchInput>
          ) : (
            <ListIsEmpty>
              Your list is empty... Please add a new contact
            </ListIsEmpty>
          )}
          <ListContact></ListContact>
        </ContainerList>
      </ThemeProvider>
    </>
  );
};
