import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import {
  LabelSearch,
  InputSearch,
  SearchContainer,
} from './SearchInput.styled';
import { getByFilter} from 'redux/selectors';

const SearchInput = () => {
  const filter = useSelector(getByFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <SearchContainer>
        <LabelSearch>Find contacts by name</LabelSearch>
        <InputSearch
          value={filter}
          type="text"
          name="filter"
          placeholder="enter for search"
          onChange={onChangeFilter}
        ></InputSearch>
      </SearchContainer>
    </>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  filterValue: PropTypes.string,
  onChangeByFilterValue: PropTypes.func,
};
