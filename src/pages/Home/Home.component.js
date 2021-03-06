// @flow

import React, { Component } from 'react';
import { Image, Button, View } from 'react-native';

import { Page } from 'ImageManager/src/components';

import styles from './Home.style';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  componentWillMount() {
    const unsecureURI =
      'http://www.annonceschatons.fr/wp-content/uploads/2017/07/100-chats-1662099-6.jpg';
    const secureURI =
      'https://i.pinimg.com/originals/28/7d/47/287d476e21403c4a0459102c404cc361.jpg';
    Image.prefetch(unsecureURI);
    Image.prefetch(secureURI);
  }
  goToTheImageGallery = () => this.props.navigation.navigate('imageGallery');
  goToCamera = () => this.props.navigation.navigate('camera');

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              color="blue"
              title={'Go to the image gallery'}
              onPress={this.goToTheImageGallery}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttonContainer}
              color="red"
              title={'Go to the camera'}
              onPress={this.goToCamera}
            />
          </View>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
