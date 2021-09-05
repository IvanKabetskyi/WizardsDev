import omit from 'lodash/omit';
import {EventsState} from '../index';

export const omitSelectedEventFromState = (state: EventsState): EventsState => {
    const omitKeys: (keyof EventsState)[] = ['selectedEvent'];

    return omit(state, omitKeys) as EventsState;
};
