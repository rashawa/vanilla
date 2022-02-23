/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ProfilerComponent from './ProfilerComponenet';
import StatusComponent from './StatusComponent';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const App = () => {
  const [stateShown, setStateShown] = useState<boolean>(false);
  React.useEffect(() => {
    // @ts-ignore
    fetch('https://xkcd.com/info.0.json', { cache: 'no-cache' });
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >

      <ProfilerComponent id="FlatList_measurs">
        <FlatList
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            );
          }}
          data={DATA}
          keyExtractor={(item) => item.id}
        />
      </ProfilerComponent>
      <ProfilerComponent id="post">
<Text>
    this is post
</Text>
      </ProfilerComponent>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Courier',
    marginTop: 20,
    marginBottom: 10,
  },
  entry: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    fontFamily: 'Courier',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
