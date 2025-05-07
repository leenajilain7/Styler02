import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style= {styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21- ES12
            </Text>
        </View>
        <Image
        source={{
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g., functional programming) styles.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s')}>
            <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    card : {
        width : 370,
        height : 370,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 16
    },
    elevatedCard : {
        backgroundColor : '#E07CC2',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.4
    },
    headingContainer :{
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText : {
        color : '#000',
        fontSize : 16,
        fontWeight : 600
    },
    cardImage : {
        height : 200
    },
    bodyContainer : {
        padding : 10
    },
    footerContainer : {
        padding : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    socialLinks : {
        fontSize : 16,
        color : '#000000',
        backgroundColor : '#FFF',
        paddingHorizontal : 20,
        paddingVertical : 6,
        borderRadius : 6

    }
})