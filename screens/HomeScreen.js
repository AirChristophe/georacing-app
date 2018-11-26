import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import AppBar from '../components/AppBar';


export default class HomeScreen extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        header: null,
        drawerLabel: screenProps.t('menu:home'),
    });

  render() {
    const { screenProps } = this.props;
    return (
      <View style={styles.container}>
        <AppBar
            onPress={() => this.props.navigation.openDrawer()}
            text={screenProps.t('menu:home')}
        />
        <Text>
            
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
});
