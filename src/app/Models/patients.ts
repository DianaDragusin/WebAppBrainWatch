export class Patients{
    FirstName: string;
    LastName: string;
    AverageGlucoseLevel:number;
    Hypertension:boolean;
    Married:boolean;
    Smokes:boolean;
    Age:number;
    Email:string;

    constructor()
    {
        this.FirstName = '';
        this.LastName='';
        this.AverageGlucoseLevel = 0;
        this.Hypertension=false;
        this.Married=false;
        this.Smokes=false;
        this.Age = 0;
        this.Email='';

    }
}