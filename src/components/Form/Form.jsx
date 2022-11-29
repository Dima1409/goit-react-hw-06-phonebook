import {useState} from 'react';
import { Form, LabelForm, LabelInput, ButtonSubmit } from './Form.styled';
import { nanoid } from 'nanoid';

export default function ContactsForm ({onSubmit}) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  const onIdCreate = () => {
    let idAdd = nanoid(6);
    setId(idAdd);
  }
  
  const InputChange = e => {
    const {name, value} = e.currentTarget;
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
  }

  const SubmitForm = e => {
    e.preventDefault();
    onSubmit({name, id, number});
    DefaultValue();
  }

  const DefaultValue = () => {
    setName('');
    setId('');
    setNumber('');
  }
  return (
    <>
      <Form onSubmit={SubmitForm}>
        <LabelForm>Name</LabelForm>
        <LabelInput
          value={name}
          type="text"
          name="name"
          id={id}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={InputChange}
        ></LabelInput>

        <LabelForm>Number</LabelForm>
        <LabelInput
          value={number}
          type="tel"
          name="number"
          id={id}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={InputChange}
        ></LabelInput>

        <ButtonSubmit type="submit" disabled={!name || !number}>
          Add contact
        </ButtonSubmit>
      </Form>
    </>
  );
}



