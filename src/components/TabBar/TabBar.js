import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { MaterialIcons } from '@expo/vector-icons';

import { Calls, Chats, Status } from '../../pages';

import { Container } from './styles';

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'chat', title: 'CONVERSAS' },
      { key: 'status', title: 'STATUS' },
      { key: 'call', title: 'CHAMADAS' },
    ],
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#054d44'}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            chat: Chats,
            status: Status,
            call: Calls,
          })}
          
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#dee5e4' }}
              style={{ backgroundColor: '#075e54' }}
            />
          }
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </>
    );
  }
}