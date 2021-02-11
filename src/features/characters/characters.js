import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadCharactersAsync,
  selectCharacters,
} from './charactersSlice';

import { Select, MenuItem } from '@material-ui/core';

export function Characters(props) {
  const characters = useSelector(selectCharacters);
  const characterItems = useSelector(state => {
      return state.characters.lstCharacters.map((item, index) => {
        return <MenuItem value={item.name}>{item.name}</MenuItem>
      });
  });
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    dispatch(loadCharactersAsync());
  }, []);

  const handleChange = function(e){
    setSelectedItem(e.target.value);
    const selectedCharacterItem =  characters.find((item) => {
          return item.name === e.target.value;
    });
    props.onCharacterChange(selectedCharacterItem)
  }

  return (
    <div>
      <div>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          onChange={handleChange} >
          {characterItems}
        </Select>
        <div/>        
      </div>
    </div>
  );
}
