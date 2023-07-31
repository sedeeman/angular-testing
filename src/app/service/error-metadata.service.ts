import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ErrorMetadataService implements ErrorHandler {
    handleError(error: unknown): void {
        const date = new Date();

        console.error({
            timestamp: date.toISOString(),
            message: (error as { message: string }).message,
            zone: (error as { zone: unknown }).zone,
        });
    }
}
