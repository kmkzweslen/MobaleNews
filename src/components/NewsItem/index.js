import React from 'react';
import { Text, Image, Pressable } from 'react-native';
import styles from './styles';


const NewsItem = ({ item }) => {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </Pressable>
  );
};


export default NewsItem;