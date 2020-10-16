export class Identity {
    constructor(options: {
        clientId: string,
        env?: string | null,
        log?: (message?: any, ...params: any[] ) => void,
        redirectUri?: string | null,
        sessionDomain: string
    })

    hasSession(): Promise<any>
    _enableSessionCaching: boolean;
    _itpMode: boolean;
}
