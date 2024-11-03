import { RegisterParamsType, RegisterResponseType } from "./type";

export async function registerService(params: RegisterParamsType): Promise<RegisterResponseType> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tournaments/registrants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                DeviceId: "44b4d8cd-7a2d-4a5f-a0e2-798021f1e294",
            },
            body: JSON.stringify(params),
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.Message);
        }

        return await res.json();
    } catch (error) {
        console.error("Error during registerService:", error);
        throw error; // Re-throw the error if you want the caller to handle it
    }
}


export async function updateRegisterInfoService(uniqueId: string, params: RegisterParamsType): Promise<RegisterResponseType> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tournaments/registrants/${uniqueId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                DeviceId: "44b4d8cd-7a2d-4a5f-a0e2-798021f1e294",
            },
            body: JSON.stringify(params),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.Message);
        }

        return await res.json();
    } catch (error) {
        console.error("Error during updateRegisterInfoService:", error);
        throw error; // Re-throw the error if you want the caller to handle it
    }
}
