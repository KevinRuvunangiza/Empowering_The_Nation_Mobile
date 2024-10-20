import React from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Colors } from '@/constants/Colors'; 
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

interface CourseItemProps { 
  id: string; 
  title: string; 
  price: number; 
  imageSource: any; 
  onAddToCart: () => void; 
  onRemove: () => void; // Add onRemove prop
}

const CourseItem: React.FC<CourseItemProps> = ({ id, title, price, imageSource, onAddToCart, onRemove }) => {
  const handleAddToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push({ id, title, price });
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      Alert.alert('Success', 'Item added to cart');
      onAddToCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add item to cart');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={imageSource} style={styles.icon} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <Text style={styles.subtitle}>R{price}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
        <Icon name="trash-bin-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: Colors.light.tabIconSelected,
    marginTop: 20
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  textContainer: {
    flex: 1,
    marginLeft: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    marginLeft: 10, 
  },
});

export default CourseItem;
