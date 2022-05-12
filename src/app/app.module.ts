import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { MoviesModule } from '../movies/modules/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
