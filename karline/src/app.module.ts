import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sirinekhlifi0411:Yv6nF7Zj8eyzEWxF@karline.2s8iuuo.mongodb.net/'),
    TaskModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Chemin vers le répertoire contenant vos fichiers statiques
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
