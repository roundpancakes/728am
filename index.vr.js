import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('car5.jpg')}/>
        {/* <Video
          style={{width: 3.0,height: 2.0,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            transform: [{translate: [0, 0, -2]}],}}

          source= {asset('ivy.mp4')}
          >
        </Video> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
