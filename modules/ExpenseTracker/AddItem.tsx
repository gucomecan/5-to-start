import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const AddItem = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <View>
      <Text>Add a new item:</Text>
      <View>

        <View>
          <Text>Name:</Text>
          <TextInput placeholder='Expense details' value={name} onChangeText={value => setName(value)}/>
        </View>

        <View>
          <Text>Date:</Text>
          <TextInput placeholder='dd/mm/yyyy' value={date} onChangeText={value => setDate(value)}/>
        </View>

        <View>
          <Text>Amount:</Text>
          <TextInput placeholder='0' value={amount} onChangeText={value => setAmount(value)}/>
        </View>
      </View>
    </View>
  );
}

export default AddItem;
