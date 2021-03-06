/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import codePush from 'react-native-code-push';

import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const depKey = Platform.select({
    ios: 'ba90Po1f1iUU3VQOfIfNADX2yespm5gxiMfrA',
    android: '1dWI86hQORciK3tRv4T4fALmOQJlUO9Gr1uVB',
});

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    updateDialog: true,

    installMode: codePush.InstallMode.IMMEDIATE,

    deploymentKey: depKey,
};

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior='automatic' style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}
                >
                    <Text style={{ alignSelf: 'center', fontSize: 20, color: 'purple' }}>Codepushed</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 20, color: 'purple' }}>Codepushed2222</Text>
                </View>
            </ScrollView>
            <Text>testing</Text>
            <Text>code push testing on android</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default codePush(codePushOptions)(App);
