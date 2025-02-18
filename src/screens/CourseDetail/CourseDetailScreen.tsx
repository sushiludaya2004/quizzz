import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { courses } from "../../data/courses"; // Import the courses data
import { Course } from "../../data/courses"; // Import the Course type
import { CourseDetailScreenProps } from '../types';
import * as Font from 'expo-font'; // Import expo-font

export function CourseDetailScreen({ route, navigation }: CourseDetailScreenProps) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const { courseId } = route.params; // Get courseId from route parameters
  const course: Course | undefined = courses.find((c) => c.id === courseId); // Find the course by ID

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'PlayfairDisplay': require('../../../assets/fonts/PlayfairDisplay-Regular.ttf'),
        'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'), // Load Poppins font
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <View><Text>Loading...</Text></View>; // Show a loading state while the font is loading
  }

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found 🚫</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: course.image.uri }} style={styles.image} />
      <Text style={styles.title}>{course.title} 📚</Text>
      <Text style={styles.description}>{course.description} ✨</Text>

      {/* Key Points Section */}
      {course.keyPoints && course.keyPoints.length > 0 && (
        <LinearGradient colors={['#FFB6C1', '#FF69B4']} style={styles.gradientBorder}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Points 🌟</Text>
            <Text style={styles.content}>
              {course.keyPoints.map((point, index) => (
                <Text key={index} style={styles.bold}>• {point}{"\n"}</Text> // Added bullet points
              ))}
            </Text>
          </View>
        </LinearGradient>
      )}

      {/* Examples Section */}
      {course.examples && course.examples.length > 0 && (
        <LinearGradient colors={['#ADD8E6', '#87CEFA']} style={styles.gradientBorder}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Examples 💡</Text>
            <Text style={styles.content}>
              {course.examples.map((example, index) => (
                <Text key={index} style={styles.bold}>• {example}{"\n"}</Text> // Added bullet points
              ))}
            </Text>
          </View>
        </LinearGradient>
      )}

      {/* Quizzes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quizzes 📝</Text>
        {course.quizzes.map((quiz) => (
          <Button
            key={quiz}
            title={`Take Quiz: ${quiz} 🚀`}
            onPress={() => navigation.navigate("Test", { testName: quiz })}
            color="#FF6347" // Button color to make it stand out
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8", // Light background color for the container
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    fontFamily: 'PlayfairDisplay', // Use the custom font
    letterSpacing: 1,
  },
  description: {
    fontSize: 18,
    marginBottom: 12,
    color: "#555",
    fontFamily: 'Poppins', // Clean font for body text
    lineHeight: 24,
  },
  gradientBorder: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden', // Ensures the inner content respects the border radius
    elevation: 5, // Add some shadow for depth
  },
  section: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 5, // Add depth with shadow
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    fontFamily: 'PlayfairDisplay', // Use the custom font
    textTransform: 'uppercase',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
    color: "#444",
    fontFamily: 'Poppins', // Use the clean font for easy reading
    lineHeight: 22,
  },
  errorText: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#333", // Optional: Change color for bold text
  },
});
