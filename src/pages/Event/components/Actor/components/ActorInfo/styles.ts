import {StyleSheet} from 'react-native';
import fontSize from 'assets/fontSize';

export default StyleSheet.create({
    title: {
        fontSize: fontSize.h2,
    },
    wrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 8,
    },
});
