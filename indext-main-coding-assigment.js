console.log("starting my week 5 coding assignment")
class Vehicle {
   constructor(model, color) {
   
    this.model = model;
        this.color = color;
    }

    describe() {
        return`${this.model} builds ${this.color}.`;
}
}
class Make {
    constructor(model) {
        this.Model = model;
        this.Vehicle = [];
 }

  addVehicle(Vehicle) {
    if (Vehicle instanceof Vehicle) {
    this.Vehicle.push(Vehicle);
    }else{
        throw new Error(`you can only add an instance of Vehicle. Argument is not a vehicle: ${Vehicle} `);
    
    }
  } 
  
  
  describe() {
    return `${this.model} has ${this.Vehicle.length} vehicles.`;
  }
}
class Menu {
   constructor() {
        this.Make = [];
        this.selectedMake = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createMake();
                    break;
                case '2':
                    this.viewMake();
                     break;
                 case '3':
                    this.deleteMake();
                    break;
                case '4':
                    this.displayMake();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
            //keeps on looping as long we don't select zero or something other than one through four
        }
        alert('Goodbye!');

    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new make 
        2) view make
        3) delete make
        4) display all makes
        `);
    }

    showMakeMenuOptions(makeInfo) {

    
        return prompt(`
       0) back
       1) create vehicle
       2) delete vehicle
       ------------------
       ${makeInfo}
        `);
    }

 displayMake() {
        let makeString = '';
        for (let i = 0; i < this.Make.length; i++) {
            makeString += [i] + ') ' + this.Make[i].Model + '\n';
        }
        alert(makeString);
    }
    createMake() {
        let make = prompt(`Enter model for new make:`);
        this.Make.push(new Make(make));
    }

    viewMake() {
        let index = prompt(`Enter the index of the make you wish to view:`);
        if (index > -1 && index < this.Make.length) {
            this.selectedMake = this.Make[index];
            let description = 'Make Model: ' + this.selectedMake.Model + '\n';

            for (let i = 0; i < this.selectedMake.Vehicle.length; i++) {
                description += [i] + ') ' + this.selectedMake.Vehicle[i].model 
                 + ' - ' + this.selectedMake.Vehicle[i].color + '\n';
 }

  let selection = this.showMakeMenuOptions(description);
 switch (selection) {
    case '1' :
        this.createVehicle();
        break;
        case '2':
            this.deleteVehicle();
 }
  }      
    }      
        deleteMake() {
            let index = prompt('Enter the index of the make you wish to delete:');
            if (index > -1 && index < this.Make.length) {
                this.Make.splice(index, 1);
            }
        
        }
  createVehicle() {
        let model = prompt('Enter model for new vehicle:');
        let color = prompt('Enter color for new vehicle:');
      this.selectedMake.Vehicle.push(new Vehicle(model, color));
    }

    deleteVehicle() {
        let index = prompt('Enter the index of the vehicle you wish to delete:');
        if (index > -1 && index < this.selectedMake.Vehicle.length) {
            this.selectedMake.Vehicle.splice(index, 1);
        }
    }
}
    let menu = new Menu();
    menu.start();

    