import React from 'react';
import {FlatList, View} from 'react-native';
import {Commit as CommitEntity} from 'core/entities/Event/types';
import Title from './components/Title';

import styles from './styles';
import Commit from './components/Commit';

interface OwnProps {
    commits: CommitEntity[] | undefined;
}
const Commits: React.FC<OwnProps> = ({commits}) => {
    if (!commits) {
        return null;
    }
    return (
        <View style={styles.wrapper}>
            <Title />
            <FlatList
                style={styles.listWrapper}
                data={commits}
                keyExtractor={commit => commit.sha}
                renderItem={({item}) => <Commit commit={item} />}
            />
        </View>
    );
};

export default Commits;
