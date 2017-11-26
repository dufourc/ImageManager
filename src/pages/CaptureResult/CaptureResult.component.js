// @flow

import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Page } from 'ImageManager/src/components';

import styles from './CaptureResult.style';

export default class CaptureResult extends Component {
  static navigationOptions = {
    title: 'CaptureResult',
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: this.props.navigation.state.params.imagePath,
            }}
          />
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
