import {HealthRouter} from './health';
import {HelloRouter} from './hello';
import {Koala} from './koala';

const koala = Koala({
  port: 3000,
  healthRouter: HealthRouter(),
  helloRouter: HelloRouter(),
});

koala.start();

