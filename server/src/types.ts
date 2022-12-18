export type TitlesDataType = {native: string, en: string | null}

export type RateResult = {
    count?: string;
    rate?: number;
    rate_count?: string;
    rate_id?: string;
    date?: string;
    user_id?: string;
    user_nik?: string;
    user_avatar?: string;
    en?: string
    native?: string
}

export type DataTypeRate = {
    count: string;
    stats: RateResult[];
    rates: RateResult[];
    titles: RateResult;
}

export type UserDTO_SC = {
    user_id: string,
    user_email: string,
    user_activated: boolean,
}

export type UserDTO_CC = {
    userId: string,
    userEmail: string,
    userActivated: boolean,
}