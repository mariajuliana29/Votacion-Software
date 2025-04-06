import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoCandidatoService } from './tipo_candidato/tipo_candidato.service';

@Module({
  imports: [UsuarioModule],
  controllers: [AppController],
  providers: [AppService, TipoCandidatoService],
})
export class AppModule {}
