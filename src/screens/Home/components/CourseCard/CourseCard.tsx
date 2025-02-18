import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface CourseCardProps {
  title: string;
  description: string;
  image: {
    uri: string;
    alt: string;
  };
  onPress: () => void;
}

export function CourseCard({ title, description, image, onPress }: CourseCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{ uri: image.uri }} style={styles.image} alt={image.alt} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
  description: {
    fontSize: 14,
    padding: 8,
  },
}); 