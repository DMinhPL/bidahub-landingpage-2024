import { GenerateQrResponseType, GenerateTokenResponseType, QrCodeParams } from "./type";

export const getTokenService = async (): Promise<GenerateTokenResponseType> => {
    const username = 'customer-bidahub-user24175';
    const password = 'Y3VzdG9tZXItYmlkYWh1Yi11c2VyMjQxNzU=';
    const credentials = btoa(`${username}:${password}`);

    const res = await fetch(`${process.env.NEXT_PUBLIC_VIET_QR_API_URL}/api/token_generate`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};


export const generateQrCodeService = async (params: QrCodeParams, token: string): Promise<GenerateQrResponseType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VIET_QR_API_URL}/api/qr/generate-customer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(params),
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
