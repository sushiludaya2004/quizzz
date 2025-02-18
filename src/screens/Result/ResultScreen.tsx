import React, { useEffect } from 'react';
import { ResultScreenProps } from "../types";
import { StyleSheet, Text, View } from "react-native";
import { ResultsCard, TimeSpentCard, Button } from "./components";
import { SafeAreaBox } from "../../components";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ResultScreen({ navigation, route }: ResultScreenProps) {
  const { correctAnswers, totalQuestions, timeTaken, quizName } = route.params;

  useEffect(() => {
    const saveResult = async () => {
      const newResult = {
        quizName,
        correctAnswers,
        totalQuestions,
        timeTaken,
        dateTime: new Date().toISOString(), // Save the current date-time
      };
      const results = await AsyncStorage.getItem('quizResults');
      const updatedResults = results ? JSON.parse(results) : [];
      updatedResults.push(newResult);
      await AsyncStorage.setItem('quizResults', JSON.stringify(updatedResults));
    };

    saveResult();
  }, [correctAnswers, totalQuestions, timeTaken, quizName]);

  return (
    <SafeAreaBox>
      <View style={results.root}>
        <View style={results.cardContainer}>
          <Text style={results.resultsText}>Results</Text>
          <ResultsCard
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
          />
          <TimeSpentCard timeTaken={timeTaken} />
        </View>

        <View style={results.buttonContainer}>
          <Button
            text="Return home"
            textColor="#fafafa"
            backgroundColor="#fbbf24"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaBox>
  );
}

const results = StyleSheet.create({
  root: {
    height: "100%",
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardContainer: {
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    width: "100%",
    gap: 8,
  },
  resultsText: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
  },
  button: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    alignSelf: "center",
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
