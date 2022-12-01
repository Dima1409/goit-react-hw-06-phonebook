import React from 'react';
import { List, ListItem, DeleteButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { getContacts, getByFilter} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ListContact = () => {
    const contacts = useSelector(getContacts);
    console.log(contacts)
    
    const filter = useSelector(getByFilter);
    const dispatch = useDispatch();

    const onDeleteItem = id => {
        dispatch(deleteContact(id));
    }

    const getSortContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(elem=>elem.name.toLowerCase().includes(normalizedValue))
    }
    const sortedContacts = getSortContacts();

    return (
            <List>
                {sortedContacts.map(({id, name, number})=>{
                    return <ListItem key={id}><p>{name}: {number}</p><DeleteButton onClick={onDeleteItem}>Delete</DeleteButton></ListItem>
                })}
            </List>
    )
}

export default ListContact;


ListContact.propTypes = {
    contacts: PropTypes.PropTypes.arrayOf(
         PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }))
}