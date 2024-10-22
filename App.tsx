import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" semiBold>
        Texto
      </Text>
    </SafeAreaView>
  );
}

export default App;
