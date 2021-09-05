import {useDispatch} from 'react-redux';
import EventEntity from 'core/entities/Event/types';
import {putEventsList} from '../actions';
import {putSelectedEvent} from '../simpleActions';

interface OwnResult {
    putEventsList: () => Promise<void>;
    putSelectedEvent: (event: EventEntity) => void;
}

export default function (): OwnResult {
    const dispatch = useDispatch();

    return {
        putEventsList: async () => {
            await dispatch(putEventsList());
        },
        putSelectedEvent: event => dispatch(putSelectedEvent(event)),
    };
}
