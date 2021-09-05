import {useSelector} from 'react-redux';
import EventEntity from 'core/entities/Event/types';
import getSelectedEvent from '../selectors/getSelectedEvent';

export default function (): EventEntity | undefined {
    return useSelector(getSelectedEvent);
}
