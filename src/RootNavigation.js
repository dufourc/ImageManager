// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'ImageManager/src/pages';

export default StackNavigator(
  {
    home: {
      screen: Pages.Home,
    },
    imageGallery: {
      screen: Pages.ImageGallery,
    },
    camera: {
      screen: Pages.Camera,
    },
  },
  {
    initialRouteName: 'home',
  }
);
