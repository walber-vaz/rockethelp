import React, { useState } from 'react';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Filter from '../../components/Filter';
import Order from '../../components/Order';
import Button from '../../components/Button';

function Home() {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState('open');
  const [orders, setOrders] = useState([
    {
      id: '123',
      patrimony: '45654745',
      when: '09/01/23 às 10:00',
      status: 'open',
    },
    {
      id: '1235',
      patrimony: '567657',
      when: '09/01/23 às 11:00',
      status: 'closed',
    },
  ]);
  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId) {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meu chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações{' '}
                {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />
        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}

export default Home;
