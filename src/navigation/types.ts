import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExerciseResponse} from '../types/exercise';

export enum RootRouteList {
  Search = 'Search',
  SearchResult = 'SearchResult',
  ExerciseDetails = 'ExerciseDetails',
}

export type RootRoutes = {
  [RootRouteList.Search]: undefined;
  [RootRouteList.SearchResult]: undefined;
  [RootRouteList.ExerciseDetails]: {
    data: ExerciseResponse;
  };
};

export type ExerciseDetailsProp = NativeStackScreenProps<
  RootRoutes,
  RootRouteList.ExerciseDetails
>;

export type RootNavigationProps = NativeStackScreenProps<RootRoutes>;

export type RootNavigationType = Pick<RootNavigationProps, 'navigation'>;

export type RootNavigation = RootNavigationType['navigation'];
