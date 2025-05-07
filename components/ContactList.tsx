import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid : 1,
            name : 'Zeena Youhan',
            status : 'Senior Software Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
        {
            uid : 2,
            name : 'Jeema Riyana',
            status : 'Software Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
        {
            uid : 3,
            name : 'Leena Jilain',
            status : 'Software Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
        {
            uid : 4,
            name : 'Zameer Younus',
            status : 'Software Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
        {
            uid : 5,
            name : 'Shameer Sheriff',
            status : 'Software Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
        {
            uid : 6,
            name : 'Fawaz Iqbal',
            status : 'Machanical Engineer',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHXh2yf0xgOkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704522617854?e=2147483647&v=beta&t=xEnly0wgbqT53L9LMX41bqBodCZE9qsL7jQnNl49XF4',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View style={styles.usercard}>
                <Image 
                source={{
                    uri : imageUrl
                }}
                style={styles.userImage}
                />
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    container : {
        paddingHorizontal : 16
    },
    usercard : {
        
    },
    userImage : {
        width : 60,
        height : 60,
        borderRadius : 25,
        margin : 10
    },
    userName : {},
    userStatus : {}
})