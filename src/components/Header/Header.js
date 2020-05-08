import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Options } from './styles';

export default function Header(props) {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Options>
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="#FFF" />
        </TouchableOpacity>
      </Options>
    </Container>
  );
}