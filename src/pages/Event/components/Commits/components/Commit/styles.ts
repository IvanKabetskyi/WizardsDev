import {StyleSheet} from 'react-native';
import colors from 'assets/colors';
import fontSize from 'assets/fontSize';

export default StyleSheet.create({
    subtitle: {
        fontSize: fontSize.h4,
    },

    title: {
        fontSize: fontSize.h3,
        fontWeight: 'bold',
    },

    wrapper: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
});
