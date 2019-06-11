import React, { Component } from 'react';
import { StyleSheet, Text, View }from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {

    weatherCases = {
        Rain: {
            colors: ["#00C6FB", "#005BEA"],
            title: "Raining",
            icon: 'ios-rainy'
        },
        Clear: {
            colors: ["#FEF253", "#FF7300"],
            title: "Sunny",
            icon: 'ios-sunny'
        },
        Thunderstorm: {
            colors: ["#00ECBC", "#007ADF"],
            title: "Thunderstorm",
            icon: 'ios-thunderstorm'
        },
        Clouds: {
            colors: ["#D7D2CC", "#304352"],
            title: "Clouds",
            icon: 'ios-cloudy'
        },
        Snow: {
            colors: ["#7DE2FC", "#B9B6E5"],
            title: "Snow",
            icon: 'ios-snow'
        },
        Drizzle: {
            colors: ["#89F7FE", "#66A6FF"],
            title: "Drizzle",
            icon: 'ios-water'
        },
        Haze: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Mist: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Smoke: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Dust: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Fog: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Sand: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Ash: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Squall: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        },
        Tornado: {
            colors: ["#D7D2CC", "#304352"],
            title: "Haze",
            icon: 'ios-cloudy'
        }
    }

    render() {
        const celsius = this.props.temperature - 273.15;
        //console.log(this.props.name)

        return(
            //LinearGradient 컴포넌트는 색깔을 여러개 지정해서 Gradient처럼 나올 수 있다.
            <LinearGradient colors={this.weatherCases[this.props.name].colors} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name={this.weatherCases[this.props.name].icon} />
                    <Text style={styles.temp}>{celsius.toFixed(1)}º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{this.weatherCases[this.props.name].title}</Text>
                </View>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 45,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 20,
        fontWeight: '300'
    }
})