export interface AuthResponseData{
    token: string;
    name: string;
    email: string;
    role: string;
}
export interface AuthResponse{
    statusCode: number;
    message: string;
    data: AuthResponseData;
}
