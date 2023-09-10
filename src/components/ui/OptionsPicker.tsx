import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFormikField} from '../../hooks/useFormikField';
import {StringSerializer} from '../../services/helpers/stringHelpers';
import {colors} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 20,
  },
  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    marginLeft: 5,
    marginTop: 8,
    marginBottom: 12,
    color: colors.white,
    fontWeight: '600',
  },
  option: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey,
    margin: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: colors.lightGray,
  },
  activeOption: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  optionLabel: {
    textTransform: 'capitalize',
    fontWeight: '600',
    color: colors.white,
  },
  activeOptionLabel: {
    color: colors.black,
  },
  clearBtn: {
    marginLeft: 20,
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 4,
  },
  clearBtnLabel: {
    color: colors.black,
    fontWeight: '600',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

interface OptionsPicker {
  label: string;
  data: any;
  fieldName: string;
}

const OptionsPicker: FC<OptionsPicker> = ({label, data, fieldName}) => {
  const [active, setActive] = useState('');
  const pickerValues = Object.values(data);

  const {helpers} = useFormikField(fieldName);

  const handleChange = (value: string) => async () => {
    await helpers.setValue(value);
    setActive(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{`${label}:`}</Text>
        {!!active && (
          <TouchableOpacity style={styles.clearBtn} onPress={handleChange('')}>
            <Text style={styles.clearBtnLabel}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.subContainer}>
        {pickerValues.map((optionLabel, i) => {
          const isActive = optionLabel === active;
          return (
            <TouchableOpacity
              key={(optionLabel as string) + i}
              style={[styles.option, isActive && styles.activeOption]}
              onPress={handleChange(optionLabel as string)}>
              <Text
                style={[
                  styles.optionLabel,
                  isActive && styles.activeOptionLabel,
                ]}>
                {StringSerializer.enumToString(optionLabel as string)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default OptionsPicker;
