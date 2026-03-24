export class MyClass {
    name : string;
    age : number;

    constructor(nameParams : string,ageParams : number){
        this.name = nameParams;
        this.age = ageParams
    }

    action()
    {
        console.log("age :" + this.age + "- name :" + this.name)
    }
}