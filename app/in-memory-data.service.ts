import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let departments = [
      {id: 82, name: 'Front-end'},
      {id: 83, name: 'Back-end'}
    ];
    return {departments};
  }
}
