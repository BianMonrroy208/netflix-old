import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

import SideMnu from 'react-native-side-menu'
import List from './componentes/List'
import Header from "./componentes/Header";
import Sliders from './componentes/Slider';
import Menu from './componentes/Menu'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false

        }
        this.buscar = this.buscar.bind(this)
        this.back = this.back.bind(this)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    buscar(){
        this.props.navigation.navigate('search')
    }

    back(){
        this.props.navigation.navigate('home')
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <SideMnu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}

                >
                    <View style={[{ flex: 1 }, styles.container]}>
                        <Header toggle={this.toggle.bind(this)} buscar={this.buscar.bind(this)} back={this.buscar.bind(this)}/>
                        <Sliders />
                        <List />
                    </View>
                </SideMnu>
                
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})
export default App

