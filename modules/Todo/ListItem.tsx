import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { DataType } from './types'

type Props = {
  item: DataType
  index: number
  deleteItem: (index: number) => void
  saveItem: (item: DataType, index: number) => void
}

const ListItem:React.FC<Props> = ({item, index, deleteItem, saveItem}) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState<string>(item.value);

  const toggleEditMode = () => {
    setEditMode(mode => !mode)
  }
  return (
    <View style={styles.itemWrapper}>
      {
        editMode
          ? <TextInput
              style={[styles.textWrapper, styles.text, styles.input]}
              value={value}
              onChangeText={text => setValue(text)}
              placeholder='To do item'
            />
          : ( <View style={styles.textWrapper}>
                <Text style={styles.text}>{value}</Text>
              </View>)
      }
      <View style={styles.controls}>
        <View style={styles.button}>
          <Button onPress={() => deleteItem(index)} title='Delete'/>
        </View>
        <View style={styles.button}>
          {
            editMode
            ? <Button
                disabled={value===''}
                onPress={() => {
                  saveItem({id:item.id, value: value}, index)
                  toggleEditMode()
                }}
                title='Save'
              />
              : <Button
                  onPress={() => {
                    toggleEditMode()
                  }}
                  title='Edit'
                />
          }
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 1,
  },
  textWrapper: {
    width: 200,
    height: 32,
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: 'Roboto',
    lineHeight: 16,
    fontSize: 16,
  },
  button: {
    marginLeft: 5
  },
  controls: {
    flexDirection: 'row'
  }
})



export default ListItem;
