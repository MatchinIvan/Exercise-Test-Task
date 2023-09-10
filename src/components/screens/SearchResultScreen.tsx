import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';
import { useAppSelector } from '../../store';
import { ExerciseSelectors } from '../../store/selectors/exercise';
import Icon from '../ui/Icon';
import { Icons } from '../../constants/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { RootNavigation, RootRouteList } from '../../navigation/types';
import { ExerciseResponse } from '../../types/exercise';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20
  },
  title: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: 20,
    fontSize: 22,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    backgroundColor: colors.grey,
    marginVertical: 5
  },
  cardSubContainer: {
    flexGrow: 1,
  },
  carLabel: {
    fontWeight: '600',
    color: colors.white,
  },
  diffLabelContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: colors.green
  },
  diffLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: colors.black,
    backgroundColor: colors.green
  },
  icon: {
    alignSelf: 'center'
  }
});

const SearchResultScreen: FC = () => {
  const exerciseList = useAppSelector(ExerciseSelectors.getExerciseState);

  const navigator = useNavigation<RootNavigation>();

  const onPress = (data: ExerciseResponse) => () => {
    navigator.navigate(RootRouteList.ExerciseDetails, { data });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise list:</Text>
      <ScrollView contentInset={{bottom: 20}}>
        {exerciseList.map((elem, i) => {
          return (
            <TouchableOpacity onPress={onPress(elem)} key={elem.name + i} style={styles.card}>
              <View style={styles.cardSubContainer}>
                <Text style={styles.carLabel}>{elem?.name}</Text>
              </View>
              <Icon styles={styles.icon} icon={Icons.rightWhiteArrow}/>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default SearchResultScreen;
