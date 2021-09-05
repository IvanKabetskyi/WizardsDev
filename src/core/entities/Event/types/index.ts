export type Actor = {
    id: number;
    login: string;
    displayLogin: string;
    gravatarId: string;
    url: string;
    avatarUrl: string;
};

export type Repo = {
    id: number;
    name: string;
    url: string;
};

export type Author = {
    email: string;
    name: string;
};

export type Commit = {
    sha: string;
    author: Author;
    message: string;
    distinct: boolean;
    url: string;
};

export type Payload = {
    pushId: number;
    size: number;
    distinctSize: number;
    ref: string;
    head: string;
    before: string;
    commits?: Commit[];
};

type EventEntity = {
    id: string;
    type: string;
    actor: Actor;
    repo: Repo;
    payload: Payload;
    public: boolean;
    createdAt: string;
};

export default EventEntity;
