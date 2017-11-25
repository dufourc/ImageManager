// @flow

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { Page } from 'ImageManager/src/components';
import styles from './Home.style';

const catPicture = require('../../images/cat.jpg');

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  render() {
    const unsecureURI =
      'http://www.annonceschatons.fr/wp-content/uploads/2017/07/100-chats-1662099-6.jpg';
    const secureURI =
      'https://i.pinimg.com/originals/28/7d/47/287d476e21403c4a0459102c404cc361.jpg';
    return (
      <Page>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text> Static Image </Text>
            </View>
            <Image style={styles.image} source={catPicture} />
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text> Secured Network Image </Text>
            </View>
            <Image source={{ uri: secureURI }} style={styles.image} />
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text> Network Image </Text>
            </View>
            <Image source={{ uri: unsecureURI }} style={styles.image} />
          </View>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
