import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {getCommits} from 'core/entities/Event/modules';
import useStateSelectedEvent from './hooks/useStateSelectedEvent';
import useEventActions from './hooks/useEventActions';
import Actor from './components/Actor';
import Commits from './components/Commits';
import styles from './styles';

const Event: React.FC = () => {
    const isFocused = useIsFocused();
    const {clearSelectedEvent} = useEventActions();
    const selectedEvent = useStateSelectedEvent();

    useEffect(() => {
        if (!isFocused) {
            clearSelectedEvent();
        }
    }, [isFocused]);

    if (!selectedEvent) {
        return null;
    }
    return (
        <View style={styles.wrapper}>
            <Actor actor={selectedEvent.actor} />
            <Commits commits={getCommits(selectedEvent)} />
        </View>
    );
};

export default Event;
