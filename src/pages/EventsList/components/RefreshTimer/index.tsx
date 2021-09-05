import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const RefreshTimer: React.FC = () => {
    const initialSeconds = 15;
    const SECOND = 1000;
    const [timerSeconds, setTimerSeconds] = useState<number>(initialSeconds);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerSeconds(prevState => {
                if (prevState === 0) {
                    clearInterval(interval);
                    return initialSeconds;
                }
                return prevState - 1;
            });
        }, SECOND);
        return () => clearInterval(interval);
    }, []);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>You can refresh in {timerSeconds} second(s)</Text>
        </View>
    );
};

export default RefreshTimer;
