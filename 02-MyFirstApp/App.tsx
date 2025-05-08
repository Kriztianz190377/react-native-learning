import {CounterScreen} from './src/presentaion/screens/CounterScreen'
import {HellowWordScreen} from './src/presentaion/screens/HellowWordScreen'
import {SafeAreaView, StyleSheet} from 'react-native'

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HellowWordScreen name='christian' /> */}
      <CounterScreen />
    </SafeAreaView>
  )
}


