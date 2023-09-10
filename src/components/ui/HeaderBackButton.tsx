import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { Icons } from '../../constants/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { RootNavigation } from '../../navigation/types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  icon: {
    transform: [{ rotate: '180deg' }],
  }
});

const HeaderBackButton: FC = () => {
  const navigation = useNavigation<RootNavigation>();

  const goBack = () => {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  return (
    <TouchableOpacity onPress={goBack}>
      <Icon styles={styles.icon} icon={Icons.rightArrow}/>
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
