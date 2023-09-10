import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { RootRouteList, RootRoutes } from './types';
import SearchScreen from '../components/screens/SearchScreen';
import SearchResultScreen from '../components/screens/SearchResultScreen';
import ExerciseDetailsScreen from '../components/screens/ExerciseDetails';
import { colors } from '../styles/colors';
import HeaderBackButton from '../components/ui/HeaderBackButton';

const Root =  createNativeStackNavigator<RootRoutes>();

const RootStack: FC = () => {
  return (
    <Root.Navigator
      initialRouteName={RootRouteList.Search}
    >
      <Root.Group screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTitleStyle: {
          color: colors.green,
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}>
        <Root.Screen
          options={{headerShown: false}}
          name={RootRouteList.Search}
          component={SearchScreen}
        />
        <Root.Screen
          name={RootRouteList.SearchResult}
          component={SearchResultScreen}
          options={{
            title: 'Search Result',
            headerLeft: () => <HeaderBackButton/>
          }}
        />
        <Root.Screen
          name={RootRouteList.ExerciseDetails}
          component={ExerciseDetailsScreen}
          options={{
            headerLeft: () => <HeaderBackButton/>
          }}
        />
      </Root.Group>
    </Root.Navigator>
  )
}
export default RootStack;
