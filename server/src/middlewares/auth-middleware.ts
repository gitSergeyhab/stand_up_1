import { Request, Response, NextFunction } from "express";
import { TokenType } from "../const";
import { ApiError } from "../custom-errors/api-error";
import { tokenService } from "../service/token-service";
import { UserPseudoType } from "../types";

type ReqUser = Request & {user: UserPseudoType}

export const authMiddleware = (req: ReqUser, res: Response, next: NextFunction) => {

    try {

        if (req.method === 'OPTIONS') {
            next();
        }
    
        const token = tokenService.getTokenFromRequest({req});

        if (!token) {
            return next(ApiError.UnauthorizedError());
        }

        const user = tokenService.validateToken({token, type: TokenType.Access});

        if (!user) {
            return next(ApiError.UnauthorizedError());
        }

        next();

    } catch {
        throw ApiError.UnauthorizedError()
    }
}