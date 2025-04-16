import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const UserAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class UserAuthGuard extends UserAuthGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
