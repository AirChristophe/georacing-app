import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import AppBar from '../components/AppBar';


export default class HomeScreen extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        header: null,
        drawerLabel: screenProps.t('menu:events'),
    });

  state = {
    data: false,
};

  componentDidMount = async() => {

    const response = await fetch('https://app.georacing.com/datas/applications/app_12.json');
    const data = await response.json();
    // console.log(data.events);
    this.setState({ data });
  }


  _renderItem = ({item}) => (

    <ListItem
        key={item.id}
        title={item.name}
    />

  );
  
  getContent = () => {
    const { data } = this.state;

    if(!data) {
        return false;
    }

    return (
        <FlatList
            data={data.events}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )

  }

  render() {


    return (
      <View style={styles.container}>
        <AppBar
            onPress={() => this.props.navigation.openDrawer()}
            text="News"
        />
        <List>
            {
                this.getContent()
            }
        </List>
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
