import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {ExerciseDetailsProp} from '../../navigation/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.white,
  },
  optionTextWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey,
    margin: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: colors.lightGray,
  },
  rowContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textTransform: 'capitalize',
    color: colors.white,
  },
  subTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
  instructionsText: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.white,
  },
});

const ExerciseDetailsScreen: FC<ExerciseDetailsProp> = ({route}) => {
  const {
    data: {name, type, muscle, difficulty, instructions},
  } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.rowContainer}>
        <View style={styles.optionTextWrapper}>
          <Text style={styles.text}>{type}</Text>
        </View>
        <View style={styles.optionTextWrapper}>
          <Text style={styles.text}>{difficulty}</Text>
        </View>
        <View style={styles.optionTextWrapper}>
          <Text style={styles.text}>{muscle}</Text>
        </View>
      </View>
      {!!instructions && (
        <>
          <Text style={styles.subTitle}>Instructions:</Text>
          <Text style={styles.instructionsText}>{instructions}</Text>
        </>
      )}
    </View>
  );
};

export default ExerciseDetailsScreen;
