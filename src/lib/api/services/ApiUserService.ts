/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_CreateUserRequest } from '../models/dto_CreateUserRequest';
import type { dto_CreateUserResponse } from '../models/dto_CreateUserResponse';
import type { dto_LoginRequest } from '../models/dto_LoginRequest';
import type { dto_LoginResponse } from '../models/dto_LoginResponse';
import type { dto_LogoutRequest } from '../models/dto_LogoutRequest';
import type { dto_LogoutResponse } from '../models/dto_LogoutResponse';
import type { dto_RefreshRequest } from '../models/dto_RefreshRequest';
import type { dto_RefreshResponse } from '../models/dto_RefreshResponse';
import type { dto_SetClaimsRequest } from '../models/dto_SetClaimsRequest';
import type { dto_SetClaimsResponse } from '../models/dto_SetClaimsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiUserService {
    /**
     * Set claims for a user
     * Sets claims for a user
     * @param user User to set claims for
     * @returns dto_SetClaimsResponse OK
     * @throws ApiError
     */
    public static postUsersClaims(
        user: dto_SetClaimsRequest,
    ): CancelablePromise<dto_SetClaimsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/claims',
            body: user,
        });
    }
    /**
     * Login a user
     * Logs in a user
     * @param user User to login
     * @returns dto_LoginResponse OK
     * @throws ApiError
     */
    public static postUsersLogin(
        user: dto_LoginRequest,
    ): CancelablePromise<dto_LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/login',
            body: user,
        });
    }
    /**
     * Logout a user
     * Logs out a user
     * @param user User to logout
     * @returns dto_LogoutResponse OK
     * @throws ApiError
     */
    public static postUsersLogout(
        user: dto_LogoutRequest,
    ): CancelablePromise<dto_LogoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/logout',
            body: user,
        });
    }
    /**
     * Refresh a token
     * Refreshes a token
     * @param user User to refresh
     * @returns dto_RefreshResponse OK
     * @throws ApiError
     */
    public static postUsersRefresh(
        user: dto_RefreshRequest,
    ): CancelablePromise<dto_RefreshResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/refresh',
            body: user,
        });
    }
    /**
     * Create a new user
     * Creates a new user
     * @param user User to create
     * @returns dto_CreateUserResponse Created
     * @throws ApiError
     */
    public static postUsersRegister(
        user: dto_CreateUserRequest,
    ): CancelablePromise<dto_CreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/register',
            body: user,
        });
    }
}
