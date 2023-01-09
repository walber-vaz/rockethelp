import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, VStack } from 'native-base';
import Header from '../../components/Header';

function Details() {
  const route = useRoute();

  const { orderId } = route.params;

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação" />
      <Text color="white">{orderId}</Text>
    </VStack>
  );
}

export default Details;
