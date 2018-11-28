import React from 'react';
import { withNamespaces } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

// using the translation hoc to provie t function in props using home as default namespace
// https://github.com/i18next/react-i18next#translate-hoc
export class Home extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('menu:setting'),
  });

  changeLang = (l) => {
    const { i18n } = this.props;
    const { navigation } = this.props;
    const { navigate } = navigation;
    i18n.changeLanguage(l);
    navigate('Home')
  }

  render() {
    const { t, i18n } = this.props;
    console.log("t" + t);    

    return (
      <View style={styles.container}>
        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>


        <View  style={{ margin: 30, width: '90%' }}>
            <Button
                onPress={() => {
                    this.changeLang('en');
                }}
                backgroundColor="#0090f7"
                raised
                title={t('common:actions.toggleToEnglish')} 
            />
        </View>

        <View  style={{ margin: 30, width: '90%' }}>
            <Button
                onPress={() => {
                    this.changeLang('fr');
                }}
                backgroundColor="#0090f7"
                raised
                title={t('common:actions.toggleToFrench')} 
            />
        </View>

      </View>
    );
  }
}

export default withNamespaces(['home', 'common'], { wait: true })(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separate: {
    marginTop: 50,
  },
});
