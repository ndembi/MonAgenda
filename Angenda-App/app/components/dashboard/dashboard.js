import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import {style} from './style';

export default class Main extends React.Component {
    state = { currentUser: null }
    render() {
        const { currentUser } = this.state
        return (
            <View style={style.container}>
                <Text>
                   v4 {currentUser && currentUser.email}!
        </Text>
            </View>
        )
    }
}
