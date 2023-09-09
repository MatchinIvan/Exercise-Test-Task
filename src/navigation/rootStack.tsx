import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { RootRoute } from './types';
import SearchScreen from '../components/screens/SearchScreen';
import SearchResultScreen from '../components/screens/SearchResultScreen';
import ExerciseDetailsScreen from '../components/screens/ExerciseDetails';

const Root =  createNativeStackNavigator();

const RootStack: FC = () => {
  return (
    <Root.Navigator>
      <Root.Screen name={RootRoute.Search} component={SearchScreen}/>
      <Root.Screen name={RootRoute.SearchResult} component={SearchResultScreen}/>
      <Root.Screen name={RootRoute.ExerciseDetails} component={ExerciseDetailsScreen}/>
    </Root.Navigator>
  )
}
export default RootStack;
