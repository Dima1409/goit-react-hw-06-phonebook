import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { Form, LabelForm, LabelInput, ButtonSubmit } from './Form.styled';
import { nanoid } from 'nanoid';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onIdCreate = () => {
    let id = nanoid(6);
    return id;
  };

  const SubmitForm = e => {
    e.preventDefault();
    let contact = {
      id: onIdCreate(),
      name: name,
      number: number,
    };
    const someCopyItem = contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (someCopyItem) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(contact));
    DefaultValue();
  };

  const InputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    onIdCreate();
  };

  const DefaultValue = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={SubmitForm}>
        <LabelForm>Name</LabelForm>
        <LabelInput
          value={name}
          type="text"
          name="name"
          onChange={InputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></LabelInput>

        <LabelForm>Number</LabelForm>
        <LabelInput
          value={number}
          type="tel"
          name="number"
          onChange={InputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></LabelInput>

        <ButtonSubmit type="submit" disabled={!name || !number}>
          Add contact
        </ButtonSubmit>
      </Form>
    </>
  );
}
