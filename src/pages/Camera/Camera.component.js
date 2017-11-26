// @flow

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import RNCamera from 'react-native-camera';

import { Page } from 'ImageManager/src/components';

import styles from './Camera.style';

export default class Camera extends Component {
  static navigationOptions = {
    title: 'Camera',
  };
  props: PropsType;

  takePicture = () => {
    this.camera
      .capture()
      .then(image => {
        console.log(image.path);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <RNCamera
            ref={cam => {
              this.camera = cam;
            }}
            aspect={RNCamera.constants.Aspect.fill}
            captureTarget="disk"
            captureQuality="480p"
            style={styles.camera}
          >
            <TouchableOpacity style={styles.captureButton} onPress={this.takePicture}>
              <Text style={styles.captureText}> Take a picture </Text>
            </TouchableOpacity>
          </RNCamera>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
