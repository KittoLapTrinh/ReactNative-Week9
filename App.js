import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

import Store from './redux/store';
import { Provider } from 'react-redux';
import Counter from './Counter';



export default function App() {

  
  return (
      <Provider store={Store} >
        <Counter/>
      </Provider>
    
  )
    
  
}

