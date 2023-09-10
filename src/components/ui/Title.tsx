import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  labelTxt: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const TITLE = 'Write exercise name';

const Title: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTxt}>{TITLE}</Text>
    </View>
  );
};

export default Title;
