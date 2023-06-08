
export type IGlobalInstance<T> = { [key: string]: T | undefined };

interface IServiceFactory<T> {
    new (data: any, ...params: any[]): T;
}

export function initializeService<T>(ServiceFactory: IServiceFactory<T>, data: any, globalInstance: { [key: string]: T | undefined }, globalKey: string, ...params: any[]): T {
    let service: T;

    if (process.env.NODE_ENV === 'production') {
        service = new ServiceFactory(data, ...params);
    } else {
        if (!globalInstance[globalKey]) {
            globalInstance[globalKey] = new ServiceFactory(data, ...params);
        }
        service = globalInstance[globalKey]!;
    }

    return service;
}
