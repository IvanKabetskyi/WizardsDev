import React from 'react';
import {Text, View} from 'react-native';
import {Actor} from 'core/entities/Event/types';
import styles from './styles';

const ActorInfo: React.FC<{actor: Actor}> = ({actor}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{actor.login}</Text>
        </View>
    );
};

export default ActorInfo;
