import {StyleSheet} from 'react-native';
import colors from 'assets/colors';
import fontSize from 'assets/fontSize';

export default StyleSheet.create({
    title: {
        fontSize: fontSize.h3,
    },
    wrapper: {
        alignItems: 'center',
        backgroundColor: colors.red,
        display: 'flex',
        height: 30,
        justifyContent: 'center',
        width: '100%',
    },
});
