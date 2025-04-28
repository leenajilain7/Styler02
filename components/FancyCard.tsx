import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri : 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>River</Text>
            <Text style={styles.cardLabel}>Sri Lanka</Text>
            <Text style={styles.cardDescription}>A river is a ribbon-like body of water that flows downhill from the force of gravity. A river can be wide and deep, or shallow enough for a person to wade across. A flowing body of water that is smaller than a river is called a stream, creek, or brook.</Text>
            <Text style={styles.cardFooter}>30 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal : 8
    },
    card : {},
    cardElevated : {},
    cardImage : {
        height : 180
    },
    cardBody : {},
    cardTitle : {},
    cardLabel : {},
    cardDescription : {},
    cardFooter : {}
})