import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar, Text } from 'react-native'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        animated={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Text>App.js</Text>
    </SafeAreaProvider>
  )
}

export default App
