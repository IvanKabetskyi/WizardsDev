import EventEntity, {Actor, Commit} from 'core/entities/Event/types';

export const getActor = (event: EventEntity): Actor => event.actor;

export const getCommits = (event: EventEntity): Commit[] | undefined => event.payload.commits;
