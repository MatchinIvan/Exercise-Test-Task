import React, { FC, useCallback, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';
import { withSafeArea } from '../../hocs/withSafeArea';
import { useAppDispatch, useAppSelector } from '../../store';
import { getExerciseList } from '../../store/thunks/exercise';
import FormikInput from '../ui/FormikInput';
import { Formik } from 'formik';
import { ExerciseFormFields, ExerciseRequestOptions } from '../../types/exercise';
import Title from '../ui/Title';
import LabelButton from '../ui/LabelBtn';
import { Icons } from '../../constants/assets/icons';
import OptionsPicker from '../ui/OptionsPicker';
import { ExerciseDifficulty, ExerciseMuscle, ExerciseType } from '../../constants/exerciseParams';
import { useNavigation } from '@react-navigation/native';
import { RootNavigation, RootRouteList } from '../../navigation/types';
import { ExerciseSelectors } from '../../store/selectors/exercise';
import ErrorModal from '../ui/ErrorModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: colors.black
  },
  btnContainer: {
    padding: 20,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    width: '100%',
    borderWidth: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.green,
  },
  btnLabel: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold'
  },
  loader: {
    position: 'absolute',
    right: 50,
  }
});

const initialFormValues: ExerciseRequestOptions = {
  name: '',
  type: undefined,
  muscle: undefined,
  difficulty: undefined,
}

const SearchScreen: FC = () => {
  const [visibleOptions, setOptionsVisible] = useState(false);
  const [modalVisible, showModal] = useState(false);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(ExerciseSelectors.getExerciseLoadingState);
  const data = useAppSelector(ExerciseSelectors.getExerciseState);

  const navigation = useNavigation<RootNavigation>();

  const toggleOptionsVision = useCallback(() => {
    setOptionsVisible(!visibleOptions);
  }, [visibleOptions, setOptionsVisible])

  const toggleModalVisibleState = (bool: boolean) => {
    showModal(bool);
  }

  const onSubmit = async (values: ExerciseRequestOptions) => {
    await dispatch(getExerciseList(values));

    if(data.length === 0){
      toggleModalVisibleState(true);
      return;
    }

    if(!loading){
      navigation.navigate(RootRouteList.SearchResult)
    }
  }

  const formSubmitHandler = (handler: () => void) => () => {
    handler();
  }

  return (
    <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <>
          <ScrollView style={styles.container} contentInset={{bottom: 30}}>
            <View>
              <Title/>
              <FormikInput fieldName={ExerciseFormFields.name}/>
              <LabelButton
                label={'Advanced Options'}
                onPress={toggleOptionsVision}
                iconName={Icons.rightWhiteArrow}
                showIcon
              />
            </View>
            {visibleOptions && (
              <>
                <OptionsPicker label={'Type'} data={ExerciseType} fieldName={'type'}/>
                <OptionsPicker label={'Muscle'} data={ExerciseMuscle} fieldName={'muscle'}/>
                <OptionsPicker label={'Difficulty'} data={ExerciseDifficulty} fieldName={'difficulty'}/>
              </>
            )}
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={formSubmitHandler(handleSubmit)}
            >
              <Text style={styles.btnLabel}>Search</Text>
              {loading && <ActivityIndicator style={styles.loader} size={'large'} color={colors.black}/>}
            </TouchableOpacity>
          </View>
          <ErrorModal closeModal={toggleModalVisibleState} isVisible={modalVisible}/>
        </>
      )}
    </Formik>
  );
};

export default withSafeArea(SearchScreen);
