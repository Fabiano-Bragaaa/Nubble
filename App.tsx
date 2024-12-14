import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" mb="s8">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="E-mail"
            errorMessage="erro"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
          />

          <Text mt="s10" color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button mt="s12" title="Criar uma conta" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
