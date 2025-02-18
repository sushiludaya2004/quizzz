import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TestName } from "../data/types";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the RootStackParamList first
export type RootStackParamList = {
  Home: undefined;
  Test: { title: string; testName: TestName };
  Result: { correctAnswers: number; totalQuestions: number; timeTaken: number };
  CourseDetail: { courseId: string }; // Ensure this is defined here
};

// Define other types
export type BottomTabParamList = {
  HomeTab: undefined;
  SavedTab: undefined;
  StatsTab: undefined;
  SettingsTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Test: {
    title: string;
    testName: TestName;
  };
  Result: {
    correctAnswers: number;
    totalQuestions: number;
    timeTaken: number;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Home"
>;
export type TestScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Test"
>;
export type ResultScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Result"
>;

export type CourseDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'CourseDetail'>;
  navigation: StackNavigationProp<RootStackParamList, 'CourseDetail'>;
};

export type { CourseDetailScreenProps };
