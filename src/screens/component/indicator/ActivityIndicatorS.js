import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './style';

function ActivityIndicatorS(props) {
  return (
    <ActivityIndicator
      style={[
        styles.indicator,
        {
          height: props?.isLoading ? '100%' : '6%',
          width: props?.isLoading ? '100%' : '9%',
        },
      ]}
      size={'large'}
      color={'black'}
      animating={props?.isLoading}
    />
  );
}

export default ActivityIndicatorS;
