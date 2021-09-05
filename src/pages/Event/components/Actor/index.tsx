import React from 'react';
import {View} from 'react-native';
import {Actor as ActorEntity} from 'core/entities/Event/types';
import Avatar from './components/Avatar';
import styles from './styles';
import ActorInfo from './components/ActorInfo';

const Actor: React.FC<{actor: ActorEntity}> = ({actor}) => {
    return (
        <View style={styles.wrapper}>
            <Avatar uri={actor.avatarUrl} />
            <ActorInfo actor={actor} />
        </View>
    );
};

export default Actor;
