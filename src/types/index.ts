import { CourseDetailScreenProps } from '../screens/CourseDetail/CourseDetailScreen'; // Adjust the path as necessary

export type RootStackParamList = {
  Home: undefined;
  Test: { title: string; testName: TestName };
  Result: { correctAnswers: number; totalQuestions: number; timeTaken: number };
  CourseDetail: { courseId: string };
}; 