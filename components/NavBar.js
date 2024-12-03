import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';

const NavBar = () => (
  <Appbar.Header>
    <Appbar.Action
      icon={() => <Avatar.Image size={32} source={{ uri: 'https://assets.coingecko.com/coins/images/51985/large/Cat_Slap_200x200_Logo_1.png?1732292609' }} />}
      onPress={() => { }}
    />
    <Appbar.Content title="Roland" />
    <Appbar.Action icon="magnify" onPress={() => { }} />
  </Appbar.Header>
);

export default NavBar;