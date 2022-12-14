import { IPerson, Person } from "./person/Person";
import Chance from "chance";
import * as R from 'ramda';

const chance = new Chance();
let persons: IPerson[] = R.range(0, 4).map((n: number) => new Person(chance.name(), chance.age()));
console.log(persons);