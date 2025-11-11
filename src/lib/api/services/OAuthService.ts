/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_GoogleAuthResponse } from '../models/dto_GoogleAuthResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OAuthService {
    /**
     * Google Callback
     * Handles Google OAuth callback
     * @returns dto_GoogleAuthResponse OK
     * @throws ApiError
     */
    public static getOauthGoogleCallback(): CancelablePromise<dto_GoogleAuthResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/google/callback',
        });
    }
    /**
     * Google Login
     * Redirects to Google OAuth login page
     * @returns void
     * @throws ApiError
     */
    public static getOauthGoogleLogin(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/google/login',
            errors: {
                307: `Redirect to Google OAuth login page`,
            },
        });
    }
}
