import React from 'react';
import {Commit as CommitEntity} from 'core/entities/Event/types';
import {Text, View} from 'react-native';
import styles from './styles';

const Commit: React.FC<{commit: CommitEntity}> = ({commit}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{commit.author.name}:</Text>
            <Text style={styles.subtitle}>{commit.message}</Text>
        </View>
    );
};
export default Commit;
