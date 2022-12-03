import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactsForm from 'components/Form';
import ThemeBtn from 'components/ThemeBtn';
import ListContact from 'components/ListContact';
import SearchInput from 'components/SearchInput';
import {
  Container,
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
} from './App.styled';

const App = () => {
  const theme = useSelector(state => state.theme);

  const contacts = useSelector(getContacts);
  
  return (
    <>
    <Container>
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
    </Container>
      
    </>
  );
};

export default App;