import {Payload} from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload{
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name= name;
        this.totalCapacityKg =  totalCapacityKg;
    }
    sumMass (items: Payload[]) : number {
        let sum : number = 0;
        items.forEach(element => {
            sum += element.massKg;
        });
        return sum;
    }
    currentMassKg(): number{
        return ( this.sumMass(this.cargoItems) + this.sumMass(this.astronauts) );
    }
    canAdd(item: Payload) : boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        return true;
        else
        return false;
    }
    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else
        return false;
    }
    addAstronaut ( astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else
        return false;
    }
}