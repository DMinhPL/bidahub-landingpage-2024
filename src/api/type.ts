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

type VietQRInfoType = {
    bankCode: string;
    bankName: string;
    bankAccount: string;
    userBankName: string;
    amount: string;
    content: string;
    qrCode: string;
    imgId: string;
    existing: number;
    transactionId: string | null;
    transactionRefId: string | null;
    qrLink: string | null;
    terminalCode: string | null;
    subTerminalCode: string;
    serviceCode: string;
    orderId: string;
    additionalData: string[];

};

export interface RegisterResponseType {
    Id: string | null;
    UniqueId: string;
    FullName: string;
    Email: string;
    Phone: string;
    CCCD: string;
    DateOfBirth: string;
    Gender: string;
    Address: string;
    Club: string;
    ReferralSource: string;
    Note: string;
    CreatedAt: string;
    UpdatedAt: string | null;
    PaidDateTime: string | null;
    VietQRInfo: VietQRInfoType;
    PaymentStatus: boolean;
    TransactionId: string | null;
    Active: boolean;
};

export type ErrorResponse = {
    message: string;
}

export type QrCodeParams = {
    bankCode: string;
    bankAccount: string;
    userBankName: string;
    content: string;
    qrType: number;
    amount: number;
    orderId: string;
    transType: string;
    sign: string;
    urlLink: string;
};

export type GenerateTokenResponseType = {
    access_token: string;
    token_type: string;
    expires_in: number;
}
export type GenerateQrResponseType = {
    bankCode: string;
    bankName: string;
    bankAccount: string;
    userBankName: string;
    amount: string;
    content: string;
    qrCode: string;
    imgId: string;
    existing: number;
    transactionId: string;
    transactionRefId: string;
    qrLink: string;
    terminalCode: string | null;
    subTerminalCode: string;
    serviceCode: string;
    orderId: string;
    additionalData: string[];
};
