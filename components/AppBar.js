import React from 'react';
import { Header } from 'react-native-elements';
import { colors } from '../constants/App';

export default class AppBar extends React.Component {
  render() {
    return (
        <Header
            leftComponent={{ size: 30, icon: this.props.icon ? this.props.icon : 'menu' , color: '#fff', onPress: this.props.onPress }}
            centerComponent={{ text: this.props.text, style: { color: '#fff', fontSize: 20 } }}
            // statusBarProps={{ barStyle: 'light-content' }}
            // outerContainerStyles={{ width: '100%'  }}
            // innerContainerStyles={{  }}
            backgroundColor={colors.main}
        />

    );
  }
}