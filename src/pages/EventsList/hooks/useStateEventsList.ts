import EventEntity from 'core/entities/Event/types';
import {useSelector} from 'react-redux';
import getEventsList from '../selectors/getEventsList';

export default function (): EventEntity[] {
    return useSelector(getEventsList);
}
