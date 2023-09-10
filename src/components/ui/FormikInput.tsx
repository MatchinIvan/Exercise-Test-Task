import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useFormikField} from '../../hooks/useFormikField';
import {colors} from '../../styles/colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.green,
  },
  input: {
    color: colors.green,
    fontWeight: '600',
  },
});

interface FormikInputType {
  fieldName: string;
}

const FormikInput: FC<FormikInputType> = ({fieldName}) => {
  const {field, helpers} = useFormikField(fieldName);

  const handleChange = async (value: string) => {
    await helpers.setValue(value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={field.value}
        style={styles.input}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default FormikInput;
