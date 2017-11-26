// @flow

import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { Page } from 'ImageManager/src/components';

import styles from './Home.style';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  goToTheImageGallery = () => this.props.navigation.navigate('imageGallery');

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Button
            color="blue"
            title={'Go to the image gallery'}
            onPress={this.goToTheImageGallery}
          />
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
