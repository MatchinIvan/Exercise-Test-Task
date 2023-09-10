import React, {FC} from 'react';
import {ImageProps, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/colors';
import Icon from './Icon';

const styles = StyleSheet.create({
  btnContainer: {
    position: 'relative',
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: colors.grey,
  },
  label: {
    color: colors.white,
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    marginLeft: 'auto',
    right: 15,
  },
});

interface LabelButtonProps {
  label: string;
  onPress: () => void;
  showIcon?: boolean;
  iconName?: ImageProps;
}

const LabelButton: FC<LabelButtonProps> = ({
  label,
  onPress,
  showIcon,
  iconName,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      {showIcon && (
        <Icon styles={styles.icon} icon={iconName || ({} as ImageProps)} />
      )}
    </TouchableOpacity>
  );
};

export default LabelButton;
