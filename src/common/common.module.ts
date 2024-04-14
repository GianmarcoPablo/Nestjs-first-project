import { Module } from '@nestjs/common';
import { HttpAdapter } from './adapter/http-adapter';

@Module({
    providers: [HttpAdapter],
    exports: [HttpAdapter]
})
export class CommonModule { }
