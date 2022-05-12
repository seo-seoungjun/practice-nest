import { MoviesService } from './../services/movies.service';
import { MoviesController } from './../controllers/movies.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
