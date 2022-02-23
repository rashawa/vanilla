import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import performance, {
  setResourceLoggingEnabled,
  PerformanceObserver,
} from 'react-native-performance';
import type {
  PerformanceMetric,
  PerformanceResourceTiming,
  PerformanceReactNativeMark,
} from 'react-native-performance';
import { Colors } from 'react-native/Libraries/NewAppScreen';

setResourceLoggingEnabled(true);

const formatValue = (value: number, unit?: string) => {
  switch (unit) {
    case 'ms':
      return `${value.toFixed(1)}ms`;
    case 'byte':
      return `${(value / 1024 / 1024).toFixed(1)}MB`;
    default:
      return value.toFixed(1);
  }
};

const Entry = ({
  name,
  value,
  unit = 'ms',
}: {
  name: string;
  value: number;
  unit?: string;
}) => (
  <Text style={styles.entry}>
    {name}: {formatValue(value, unit)}
  </Text>
);

const StatusComponent = () => {
  return (
    <View style={styles.body}>

     
      {performance.get().map((entry: any, i: number) => {
        return (
          <View key={i + ''}>
            <Text
              style={{
                backgroundColor: 'black',
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                padding:20
              }}
            >
              {entry.name} took ${entry.duration}ms
            </Text>
          </View>
        );
      })}
    </View>
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
});


export default StatusComponent