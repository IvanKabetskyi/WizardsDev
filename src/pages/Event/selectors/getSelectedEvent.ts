import AppState from 'store/types';
import EventEntity from 'core/entities/Event/types';

export default function (state: AppState): EventEntity | undefined {
    return state.events.selectedEvent;
}
