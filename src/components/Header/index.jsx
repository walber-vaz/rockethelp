import React from 'react';
import { Heading, HStack, IconButton, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

function Header({ title, ...rest }) {
  const { colors } = useTheme();

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} />
      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}

export default Header;