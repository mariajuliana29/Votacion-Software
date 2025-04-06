import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + 'Mi grupo esta conformado por: Yoimer Ayazo, Daniel Paternina y David Mendez';
  }
}
