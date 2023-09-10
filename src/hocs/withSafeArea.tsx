import React, { ComponentType, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});

export const withSafeArea = <T extends PropsWithChildren,>(Component: ComponentType<T>) => (props: T) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Component {...props}/>
    </SafeAreaView>
  )
}
