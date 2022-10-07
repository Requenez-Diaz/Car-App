import { SafeAreaView} from 'react-native';
import Main from './components/Main';

export default function App() {
  return (
    <SafeAreaView style = {{ flex: 1,}}>
      <Main/>
    </SafeAreaView>

  );
}