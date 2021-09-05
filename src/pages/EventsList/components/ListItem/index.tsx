import React from 'react';
import {useNavigation} from '@react-navigation/native';
import EventEntity from 'core/entities/Event/types';
import {getActor} from 'core/entities/Event/modules';
import {Text, TouchableOpacity} from 'react-native';
import routes from 'router/constants/routes';
import useEventsListActions from '../../hooks/useEventsListActions';
import styles from './styles';

const ListItem: React.FC<{event: EventEntity}> = ({event}) => {
    const {putSelectedEvent} = useEventsListActions();
    const navigation = useNavigation<any>();
    const actor = getActor(event);
    const handlePress = (): void => {
        putSelectedEvent(event);
        navigation.navigate(routes.event);
    };
    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
            <Text style={styles.title}>{actor.login}</Text>
        </TouchableOpacity>
    );
};

export default ListItem;
