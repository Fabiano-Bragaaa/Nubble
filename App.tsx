import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge">Ola</Text>
          <Button title="entrar" mb="s20" preset="outline" disabled />
          <Button loading title="entrar" disabled />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
