import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return {
      squadA: A(['Rajesh', 'Ghanesh']),
      squadB: A(['Prathees', 'Venkatesh', 'Albert']),
      squadC: A(['Raghul', 'Anto', 'Akshaya', 'Shakti']),
      squadD: A(['Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh', 'Ghanesh', 'Shyam', 'Karthick Kalyanasundaram'])
    }
  }
});
