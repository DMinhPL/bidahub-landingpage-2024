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
};

export type ErrorResponse = {
    message: string;
}