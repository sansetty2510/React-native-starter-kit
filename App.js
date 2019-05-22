import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollapseView from "react-native-collapse-view";

export default class App extends React.Component {
  _renderTensionView = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>With tension effect</Text>
      </View>
    )
  }
  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
    )
  }
  _renderView = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>Toggle {collapse? 'on': 'off'}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <CollapseView 
          tension={100}
          renderView={this._renderTensionView}
          renderCollapseView={this._renderCollapseView}
        />
        <CollapseView 
          renderView={this._renderView}
          renderCollapseView={this._renderCollapseView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    height:50,
    padding: 20,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  collapseView: {
    padding: 20
  }
});