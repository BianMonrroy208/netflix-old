import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get('window')

const show_first = [
    {
        "key": 1,
        "name": "Suits",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg"
    },
    {
        "key": 2,
        "name": "Modern Family",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
    },
    {
        "key": 3,
        "name": "The Flash",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
    },
    {
        "key": 4,
        "name": "Supergirl",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
    },
    {
        "key": 5,
        "name": "Designated Survivor",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg"
    },
    {
        "key": 6,
        "name": "24: Legacy",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
    },
    {
        "key": 7,
        "name": "Colony",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg"
    },
    {
        "key": 8,
        "name": "The Walking Dead",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
    },
    {
        "key": 9,
        "name": "Taken",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
    },
    {
        "key": 10,
        "name": "This is us",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
    },
    {
        "key": 11,
        "name": "Superstore",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
    },
    {
        "key": 12,
        "name": "Lethal Weapon",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
    },
    {
        "key": 13,
        "name": "The 100",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
    },
    {
        "key": 14,
        "name": "Homeland",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
    }
]
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data:''
        }
    }

    filter(text){
        const newData = show_first.filter(function(item){
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            
        })
        this.setState({
            data: newData , 
            text: text,
        })
    }

    deletData(){
        this.setState({
            text:'',
            data:''
        })
    }
    _renderItem(item){
        return(
            <Image key={item.key} style={styles.image} source={{uri:item.image}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name={'search'}
                        color='grey'
                        size={18}
                        style={styles.searchIcon} />
                    <TextInput value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                        placeholder='Search'
                        placeholderTextColor='grey'
                        keyboardAppearance='light'
                        autoFocus={true}
                    />
                    {this.state.text ?
                      <TouchableWithoutFeedback onPress={ () => this.deletData()}>
                            <Icon
                            name='times-circle'
                            color='gray'
                            size={18}
                            style={styles.iconIputClose}
                            
                        />
                      </TouchableWithoutFeedback>
                        : null}
                    <TouchableWithoutFeedback style={styles.cancelButton}>
                        <View style={styles.containerButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList style={styles.flatList}
                    data={this.state.data}
                    renderItem={({item}) => this._renderItem(item)}
                    numColumns={3}
                    columnWrapperStyle={{marginTop:5, marginLeft:5}}
                    >

                    </FlatList >
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 36,
        width: width - (width / 4),
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,

    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    cancelButton: {

    },
    containerButton: {

    },
    cancelText: {
        color: 'white'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconIputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    flatList:{
        marginHorizontal: 5,
    },
    image:{
        marginRight: 5,
        width: 115,
        height: 170
    },

})
export default Search
