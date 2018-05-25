import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import {
  createStackNavigator,
} from 'react-navigation';

export class HomePage extends Component {

  static navigationOptions = ({ navigation }) => {
    return ({
      title: 'Inicio',
      headerRight: (
        <Button
          onPress={() => navigation.navigate("Registro")}
          title="Registro"
        />
      ),
    });
  };

  render() {
      return (
        <View>
          <Text>Hola</Text>
          <Button
            onPress={() => this.props.navigation.navigate("Registro")}
            title="Learn More"
          />
        </View>
      );
  }

}

export class RegistroPage extends Component {

  static navigationOptions = {
    title: 'Registro',
  };

  render() {
      return (
        <View style={{
          padding: 20,
        }}>
            <FormLabel>Name</FormLabel>
            <FormInput />
            <FormValidationMessage>Error message</FormValidationMessage>
        </View>
      );
  }

}

const AppNav = createStackNavigator({
  Home: { screen: HomePage },
  Registro: { screen: RegistroPage },
}, 
{
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <AppNav />;
  }
}

AppRegistry.registerComponent('App', () => App)