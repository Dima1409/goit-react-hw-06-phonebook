import React from 'react';
import { List, ListItem, DeleteButton } from './ListContact.styled';
import PropTypes from 'prop-types';

const ListContact = ({contactsItem, deleteItem}) => {
    return (
            <List>
                {contactsItem.map(({id, name, number})=>{
                    return <ListItem key={id}><p>{name}: {number}</p><DeleteButton onClick={()=>deleteItem(id)}>Delete</DeleteButton></ListItem>
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