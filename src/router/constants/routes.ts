import {RootStackParamList} from 'router/types';

type PagesKeys = 'eventsList' | 'event';

const routes: Record<PagesKeys, RootStackParamList> = {
    eventsList: 'EventsList',
    event: 'Event',
};

export default routes;
