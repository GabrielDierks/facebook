import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";

const facebookPosts = [
  {
    title: "Amazing vacation in Bali!",
    text: "Just got back from a fantastic trip to Bali. The beaches were breathtaking, and I tried the most delicious local cuisine.",
  },
  {
    title: "Just adopted a cute puppy!",
    text: "Meet my new furry friend, Max! He's the most adorable and playful puppy I've ever seen. 🐶❤️",
  },
  {
    title: "Celebrating my birthday today 🎂",
    text: "Another year older, but feeling grateful for the love and well-wishes from friends and family. Let's make it a great year ahead!",
  },
  {
    title: "Exploring the city's hidden gems",
    text: "Took a stroll through the city and discovered some amazing hidden gems. Can't wait to explore more!",
  },
  {
    title: "Cooked a delicious homemade meal",
    text: "Tried a new recipe and it turned out amazing. Who wants to join me for dinner tonight?",
  },
  {
    title: "Fun day at the amusement park!",
    text: "Spent the day at the amusement park, riding roller coasters and indulging in cotton candy. Such a blast!",
  },
  {
    title: "Enjoying the sunset by the beach",
    text: "There's something magical about watching the sunset by the ocean. It never gets old.",
  },
  {
    title: "Movie night with friends 🍿🎬",
    text: "Movie night at home with friends, complete with popcorn and our favorite films. What's your go-to movie snack?",
  },
  {
    title: "Visited an art exhibition today",
    text: "Spent the day exploring a fascinating art exhibition. Art truly has a way of inspiring the soul.",
  },
  {
    title: "Hiking adventure in the mountains ⛰️",
    text: "Embarked on a thrilling hiking adventure in the mountains. The views up there are absolutely breathtaking!",
  },
];

const Post = ({ title, text, darkmode }) => {
  return (
    <View
      style={{
        backgroundColor: darkmode ? "#222" : "#eee",
        borderRadius: 16,
        marginVertical: 8,
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 22, color: darkmode ? "#fff" : "#000" }}>
        {title}
      </Text>
      <Text style={{ color: darkmode ? "#fff" : "#000" }}>{text}</Text>
    </View>
  );
};

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: darkmode ? "#000" : "#fff" }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            height={50}
            width={50}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
            }}
          />
          <Text
            style={{
              marginLeft: 16,
              fontWeight: "bold",
              color: darkmode ? "#fff" : "#000",
              fontSize: 32,
            }}
          >
            Facebook
          </Text>
          <Button
            title="toggle darkmode"
            onPress={() => setDarkmode(!darkmode)}
          />
        </View>
        <ScrollView>
          {facebookPosts.map(({ title, text }) => {
            return (
              <Post key={title} title={title} text={text} darkmode={darkmode} />
            );
          })}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
