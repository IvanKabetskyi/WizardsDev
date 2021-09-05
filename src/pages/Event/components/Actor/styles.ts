import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

export default StyleSheet.create({
    wrapper: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});
