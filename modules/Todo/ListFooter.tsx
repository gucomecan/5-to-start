import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native'
import { DataType } from './types'
var keygen = require("keygenerator")

type ListFooterProps = {
  addItem: (item: DataType) => void
}

const ListFooter: React.FC<ListFooterProps> = ({addItem}) => {
  const [value, setValue] = useState('')
  return (
    <View>
      <TextInput value={value} placeholder='Enter new item text...' onChangeText={text => {setValue(text)}}/>
      <Button disabled={value===''} title='Add' onPress={() => addItem({id: keygen._() as string, value: value })}/>
    </View>
  );
}

export default ListFooter;
