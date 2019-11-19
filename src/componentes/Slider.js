
import React, { Component, PureComponent } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    ViewPagerAndroid,
    StyleSheet
} from 'react-native'

import Swiper from 'react-native-swiper'
import ViewPager from '@react-native-community/viewpager'
import img from '../imagenes/1.jpg'


const { width } = Dimensions.get('window')

const Slider = props => (<View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
</View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width,
    },
}

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imagesSlider: [
                require('../imagenes/1.jpg'),
                require('../imagenes/2.jpg'),
                require('../imagenes/3.jpg')
            ]
        }
    }
    render() {
        return (
            <View style={{flex:0.5}}>
                <Swiper
                    autoplay
                   showsPagination={false}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider 
                        uri={item}
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}