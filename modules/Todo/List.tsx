import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native'
import ListItem from './ListItem'
import ListFooter from './ListFooter'
import { DataType } from './types'
var keygen = require("keygenerator")

const List = () => {
  let [items, setItems] = useState<DataType[]>([{ id: keygen._() as string, value: 'To do item...'}])

  const renderItem = ({item, index}: {item: DataType, index: number}) => {
     return <ListItem item={item} index={index} deleteItem={deleteItem} saveItem={saveItem}/>
   }

  const saveItem = (newItem: DataType, index: number) => {
    if(!(newItem.value === items[index].value)) {
       const notUpdatedItems = items.filter(item => item.id !== newItem.id)
       setItems([...notUpdatedItems, newItem])
    }
  }

  const deleteItem = (index: number) =>  {
    setItems(items => items.filter(item => item.id !== items[index].id))
  }

  const addItem = (newItem: DataType) => setItems([...items, newItem])

  return (
    <FlatList
      keyExtractor={(item)=> item.id}
      renderItem={renderItem}
      data={items}
      ListEmptyComponent={() => null}
      ListFooterComponent={() => <ListFooter addItem={addItem}/>}
    />
  );
};


export default List;
