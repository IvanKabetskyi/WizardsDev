import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Avatar: React.FC<{uri: string}> = ({uri}) => {
    return <Image resizeMode="cover" style={styles.wrapper} source={{uri}} />;
};

export default Avatar;
