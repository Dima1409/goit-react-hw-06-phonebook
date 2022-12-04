import React from 'react';
import { List, ListItem, DeleteButton, ItemInfo } from './ListContact.styled';
import { getContacts, getByFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { AiTwotoneDelete } from "react-icons/ai";
import { IconContext } from 'react-icons';

const ListContact = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getByFilter);
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  const getSortContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedValue)
    )
  };
  const sortedContacts = getSortContacts().sort((a,b)=>a.name.localeCompare(b.name));

  return (
    <List>
      {sortedContacts.length === 0 ? (
        null
      ) : (
        sortedContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <ItemInfo>
                <span>{name}:</span>
                <span>{number}</span>
              </ItemInfo>
              <DeleteButton onClick={()=>onDeleteItem(id)}>   
              <IconContext.Provider value={{ size: '25px' }}>
              <AiTwotoneDelete />
            </IconContext.Provider>
            </DeleteButton>
            </ListItem>
          );
        })
      )}
    </List>
  );
};

export default ListContact;
