import { View, KeyboardAvoidingView, SafeAreaView, FlatList, StatusBar, Platform } from 'react-native';
import React from 'react';
import { ContainerProps } from '../types/interface';
import { StylesByMain } from '../styles/CommonStyles';

const Container: React.FC<ContainerProps> = ({ children, header, footer }) => {
  return (
    <KeyboardAvoidingView style={[StylesByMain.container]} behavior="padding">
      <>
      {
        console.log("this is height value",StatusBar.currentHeight)
      }
      </>
        <StatusBar backgroundColor={"red"} translucent />
        {
          Platform.OS === 'android' && (<View style={[StylesByMain.backgroundColorBlue,{ height:StatusBar.currentHeight}]} />)
        }
      <SafeAreaView style={[StylesByMain.backgroundColorBlue]} />
        {header && header}
        <FlatList
          keyboardShouldPersistTaps="always"
          data={[{}]}
          renderItem={() => <View>{children}</View>}
        />
        {footer && footer}
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};

export default Container;
