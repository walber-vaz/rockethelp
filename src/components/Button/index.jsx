import React from 'react';
import { Button as NativeBaseButton, Heading } from 'native-base';

export function Button({ title, ...rest }) {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: 'green.500' }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
