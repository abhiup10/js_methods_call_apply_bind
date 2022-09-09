// bind()
// by this method we can bind an object to a common function so that the function gives desired result when its need


const person ={
    name: "Abhishek",
    content : "programmer",
    feature: function(){
        console.log(`Hi I'm ${this.name} and I'm a ${this.programmer}. `)
    }
} 

let person = person.feature.bind(person);
person();



// bind function



function feature(place){
    console.log(`Hi I'm ${this.name} and I'm a ${this.content}.I live in ${place} `)
}

const person1 ={
    name: "Abhishek",
    content : "programmer",
}

const person2 ={
    name: "Aishwarya",
    content : "Zoologist",
}

const person3 ={
    name: "Aarti",
    content : "correspondant",
}

let you1 = feature.bind(person1);
you1("Jaipur");

let you2 = feature.bind(person2);
you2("Udaipur");

let you3 = feature.bind(person3);
you3("Ahemdabad");