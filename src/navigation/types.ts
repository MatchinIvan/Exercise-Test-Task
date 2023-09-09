import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RootRoute {
  Search = 'Search',
  SearchResult = 'SearchResult',
  ExerciseDetails = 'ExerciseDetails'
}

export type RootRoutes = {
  [RootRoute.Search]: undefined;
  [RootRoute.SearchResult]: undefined;
  [RootRoute.ExerciseDetails]: undefined;
};

export type RootNavigationProps = NativeStackScreenProps<RootRoutes>;

export type RootNavigationType = Pick<RootNavigationProps, 'navigation'>;

export type RootNavigation = RootNavigationType['navigation'];
