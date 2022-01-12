import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar, Text, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        animated={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>App.js</Text>
      </View>
    </SafeAreaProvider>
  )
}

export default App
