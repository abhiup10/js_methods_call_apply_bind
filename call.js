// call method
// using call method an object can use a method belonging to another object.

const JuniorAssociate = {
    name: "Abhishek",
    content: "programmer",
    feature: function(rating){
        console.log(`I am ${this.name} and I'm ${this.content}. ${this.name} is a ${rating} star coder. `);
    }
}

JuniorAssociate.feature(5);


// here i called feature function from JuniorAssociate2 which is JuniorAssociate1's method using call()

const JuniorAssociate2 = {
    name:"Muskan",
    content:"programmer",
}

JuniorAssociate.feature.call(JuniorAssociate2,2);