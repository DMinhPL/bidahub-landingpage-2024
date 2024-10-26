export interface RegisterParamsType {
    FullName: string;
    Phone: string;
    CCCD: string;
    DateOfBirth: string;
    Email: string;
    Gender: string;
    Address: string;
    Club?: string;
    ReferralSource?: string;
    Note?: string;
}

export interface RegisterResponseType {
    FullName: string;
    Phone: string;
    CCCD: string;
    DateOfBirth: string;
    Email: string;
    Gender: string;
    Address: string;
    Club: string;
    ReferralSource: string;
    Note: string;
}

export type ErrorResponse = {
    message: string;
}