console.log("starting my week 5 coding assignment")
class vehicles{
    constructor(make, model){
    
        this.make = make;
        this.model = model;
    }
    describe(){
        return`${this.make} builds ${this.model}.`;

    }
}
class Model {
    constructor(make){
        this.make = make;
        this.model = [];

    }
  addVehicle(vehicle) {
    if(vehicle instanceof Vehicle) {
        this.vehicle.push(vehicle);

    }else{
        throw new Error(`you can only add an instance of Vehicle. Argument is not a vehicle: ${vehicle} `);
    }
  } 
  
  
  describe() {
    return `${this.make} has ${this.model.length}vehicle.`;
  }
}
class Menu {
    constructor() {
        this.vehicles = [];
        this.selectedVehicle = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection){
                case '1':
                    this.createVehicle();
                    break;
                case '2':
                    this.viewVehicle();
                     break;
                 case '3':
                    this.deleteVehicle();
                    break;
                case '4':
                    this.displayVehicles();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');

    }
    
    }
    

