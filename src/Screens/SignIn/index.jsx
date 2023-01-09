import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Input } from '../../components/Input';
import { Envelope, Key } from 'phosphor-react-native';

/*
para usar logo no projeto
import Logo from '../assets/logo.svg;'
*/

function SignIn() {
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      {/* <Logo /> */}
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />
    </VStack>
  );
}

export default SignIn;
