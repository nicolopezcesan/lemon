import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable, map, catchError, throwError } from "rxjs";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) => throwError(() => this.errorHandler(err, context)))
    );
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status: false,
      statusCode: status,
      message: exception.message,
      data: exception,
    });
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    const statusCode = response.statusCode;

    return {
      status: true,
      statusCode,
      data: res,
    };
  }
}