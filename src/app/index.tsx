import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Greeting name="World" />
      <Greeting name="World" />
      <Greeting name="World" />
    </View>
  )
}

function Greeting(props: {name: string}) {
  return <Text>hello {props.name}</Text>
}

export default index