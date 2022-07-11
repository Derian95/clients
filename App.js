import { StyleSheet } from 'react-native'
import AppRoute from './src/navigations/Navigator'
import LoginProvider from './src/context/LoginProvider'

export default function App() {
 

  return (
    <LoginProvider>
      <AppRoute />
    </LoginProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
