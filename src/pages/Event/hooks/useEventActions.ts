import {useDispatch} from 'react-redux';
import {clearSelectedEvent} from '../simpleActions';

type OwnResult = {
    clearSelectedEvent: () => void;
};

export default function (): OwnResult {
    const dispatch = useDispatch();

    return {
        clearSelectedEvent: () => dispatch(clearSelectedEvent()),
    };
}
