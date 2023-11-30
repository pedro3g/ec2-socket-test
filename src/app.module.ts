import { Module } from '@nestjs/common';
import { TargetGateway } from './target/target.gateway';

@Module({
  providers: [TargetGateway],
})
export class AppModule {}
