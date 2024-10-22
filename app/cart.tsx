import React, { useState, useEffect } from 'react'; 
import { View, Text, Pressable, StyleSheet, ScrollView, Alert } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useRouter } from 'expo-router'; 
import NavBar from '@/components/Navbar'; 
import CourseItem from '@/components/courseItem'; 

interface CartItem { 
  name: string; 
  price: number; 
  description: string; 
  image: string; 
} 

function Cart() { 
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 
  const [total, setTotal] = useState(0); 
  const [discount, setDiscount] = useState(0); 
  const router = useRouter(); 

  useEffect(() => { 
    loadCart(); 
  }, []); 

  const loadCart = async () => { 
    try { 
      const savedCart = await AsyncStorage.getItem('cart'); 
      if (savedCart) { 
        const parsedCart: CartItem[] = JSON.parse(savedCart); 
        setCartItems(parsedCart); 
        calculateTotals(parsedCart); 
      } 
    } catch (error) { 
      console.error('Error loading cart:', error); 
      Alert.alert('Error', 'Failed to load cart items'); 
    } 
  }; 

  const calculateTotals = (items: CartItem[]) => { 
    const subtotal = items.reduce((sum, item) => sum + item.price, 0); 

    // Determine discount based on the number of courses
    let discountPercentage = 0;
    const itemCount = items.length;

    if (itemCount === 2) {
      discountPercentage = 0.05; // 5% discount for 2 courses
    } else if (itemCount === 3) {
      discountPercentage = 0.10; // 10% discount for 3 courses
    } else if (itemCount > 3) {
      discountPercentage = 0.15; // 15% discount for more than 3 courses
    }

    const discountAmount = subtotal * discountPercentage;
    setTotal(subtotal - discountAmount); 
    setDiscount(discountAmount); 
  }; 

  const handleBuy = async () => { 
    Alert.alert('Purchase Successful', 'Thank you for your purchase!'); 
    await AsyncStorage.removeItem('cart'); 
    setCartItems([]); 
    setTotal(0); 
    setDiscount(0); 
  }; 

  const handleRemoveItem = async (index: number) => { 
    const newCartItems = [...cartItems]; 
    newCartItems.splice(index, 1); 
    setCartItems(newCartItems); 
    calculateTotals(newCartItems); 
    await AsyncStorage.setItem('cart', JSON.stringify(newCartItems)); 
  }; 

  return ( 
    <SafeAreaView style={styles.container}> 
      <View style={styles.content}> 
        <Text style={styles.modalTitle}>Cart</Text> 
        <Text style={styles.summaryText}>TOTAL: R{total.toFixed(2)}</Text> 
        <Text style={styles.summaryText}>DISCOUNT: R{discount.toFixed(2)}</Text> 
        <ScrollView style={styles.cartList}> 
          {cartItems.map((item, index) => ( 
            <CourseItem 
              key={index} 
              title={item.name} 
              price={item.price} 
              imageSource={item.image} 
              onAddToCart={() => {}} // Placeholder for onAddToCart 
              onRemove={() => handleRemoveItem(index)} // Pass the remove handler 
            /> 
          ))} 
        </ScrollView> 
        <Pressable style={styles.buyButton} onPress={handleBuy}> 
          <Text style={styles.buyButtonText}>BUY</Text> 
        </Pressable> 
      </View> 
      <NavBar /> 
    </SafeAreaView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#F2F2F2', 
  }, 
  content: { 
    flex: 1, 
    width: '90%', 
    alignSelf: 'center', 
    justifyContent: 'center', 
    paddingVertical: 40, 
  }, 
  modalTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#1E1E1E', 
    alignSelf: 'center', 
  }, 
  summaryText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    alignSelf: 'flex-start', 
    marginVertical: 5, 
    color: '#1E1E1E', 
  }, 
  cartList: { 
    width: '100%', 
    marginVertical: 20, 
    height: 100 
  }, 
  buyButton: { 
    backgroundColor: 'black', 
    paddingVertical: 20, 
    paddingHorizontal: 40, 
    borderRadius: 10, 
    marginBottom: 40, 
    alignSelf: 'center', 
  }, 
  buyButtonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
  }, 
}); 

export default Cart;
