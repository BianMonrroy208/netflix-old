import React, { Component } from "react"
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"
import IonIcons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window')


class Menu extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image
                            style={styles.avatar}
                            source={require('../imagenes/user.png')} />
                        <Text style={styles.text}>Monroy</Text>
                    </View>
                    <Icon
                        name={'exchange'}
                        color='white'
                        size={25}
                    />
                </View>
                <ScrollView >
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Icon
                                style={styles.iconWithText}
                                name={'download'}
                                color='white'
                                size={28}
                            />
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name={'angle-right'}
                            color='white'
                            size={25}
                        />
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <IonIcons
                                style={styles.iconWithText}
                                name={'md-checkmark'}
                                color='white'
                                size={28}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name={'angle-right'}
                            color='white'
                            size={25}
                        />
                    </View>
                    <View style={[styles.items, styles.itemSelected]}>
                        <Text style={styles.text}>Home</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Avaliable for download</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Netflix Originals</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Tv Shows</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Actions & Adventure</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Children & Family Movies</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Comedies</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Documenetaries</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Drams</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Independent</Text>
                    </View>
                    <View style={styles.noSelectedItem}>
                        <Text style={styles.text}>Indian Movies</Text>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15

    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 50,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    scrollContainer: {
        width: width / 2 + 50
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 3,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconWithText: {
        paddingRight: 10,
        paddingLeft: 20,

    },
    rightIcon: {
        paddingRight: 20,
    },
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#333333',
    },

    items: {
        paddingVertical:15,
        paddingLeft: 20,
        marginTop:5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor:'red'
    },
    noSelectedItem:{
        paddingVertical:15,
        paddingLeft:25,
        marginTop:5,
    }

})

export default Menu