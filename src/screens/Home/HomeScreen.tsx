import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data"; // Assuming this is for tests
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Course, courses } from "../../data/courses"; // Import Course type and courses data

interface QuizResult {
  quizName: string;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number;
  dateTime: string; // Store date-time as a string
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [previousResults, setPreviousResults] = useState<QuizResult[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadResults = async () => {
        try {
          const results = await AsyncStorage.getItem('quizResults');
          if (results) {
            const parsedResults = JSON.parse(results);
            console.log("Loaded Results:", parsedResults);
            setPreviousResults(parsedResults);
          } else {
            console.log("No results found in AsyncStorage.");
          }
        } catch (error) {
          console.error("Failed to load results from AsyncStorage:", error);
        }
      };

      loadResults(); // Load results when the screen is focused
    }, [])
  );

  return (
    <SafeAreaBox>
      <ScrollView>
        <View style={homeScreen.rootContainer}>
          <WelcomeCard />

          <Text style={homeScreen.title}>Tests</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  navigation.navigate("Test", {
                    title: item.title,
                    testName: item.testName,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
          />

          <Text style={homeScreen.title}>Courses</Text>

          <FlatList
            data={courses} // Ensure courses is imported correctly
            renderItem={({ item }: { item: Course }) => (
              <CourseCard
                title={item.title}
                description={item.description}
                image={{ uri: item.image.uri, alt: item.image.alt }} // Ensure image is structured correctly
                onPress={() => {
                  navigation.navigate("CourseDetail", { courseId: item.id }); // Navigate to CourseDetail with courseId
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
          />

          <Text style={homeScreen.previousResultsText}>Previous Results:</Text>
          {previousResults.length > 0 ? (
            previousResults.slice(-2).reverse().map((result, index) => (
              <View key={index} style={homeScreen.resultCard}>
                <Text>Quiz Name: {result.quizName}</Text>
                <Text>Correct Answers: {result.correctAnswers}</Text>
                <Text>Total Questions: {result.totalQuestions}</Text>
                <Text>
                  Date: {new Date(result.dateTime).toLocaleDateString('en-GB')}
                </Text>
                <Text>
                  Time: {new Date(result.dateTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })}
                </Text>
              </View>
            ))
          ) : (
            <Text>No previous results available.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
      <Heading text="Quiz App" fontSize={24} color="#fafafa" />
      <Text style={welcomeCard.text}>
        Welcome to the Quiz App! Get ready to test your knowledge!
      </Text>
    </View>
  );
}

const homeScreen = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#525252",
  },
  previousResultsText: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: 'bold',
  },
  resultCard: {
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

const welcomeCard = StyleSheet.create({
  root: {
    backgroundColor: "#4B5563",
    gap: 16,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fafafa",
    fontWeight: "500",
  },
});
