/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiHealthService {
    /**
     * Check the liveness of the service
     * Checks if the service is alive
     * @returns string OK
     * @throws ApiError
     */
    public static getHealth(): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
}
