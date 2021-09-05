import {StyleSheet} from 'react-native';
import fontSize from 'assets/fontSize';
import colors from 'assets/colors';

export default StyleSheet.create({
    title: {
        fontSize: fontSize.h2,
    },

    wrapper: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 24,
        width: '100%',
    },
});
