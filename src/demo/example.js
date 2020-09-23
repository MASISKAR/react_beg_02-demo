//arrow functions

// let arr = [1,2,35,6];

// let newArr = arr.map(num => num*2);


/* const user = {
    name: 'John',
    surname: 'Smith',
    getFullName: function(){
        console.log('this of getFullName', this);
let _this = this;

        const getName = function(){
            console.log('this of getName', _this);
            return _this.name;
        }

        return `${getName()} ${this.surname}`;
    }
} */


/* const user = {
    name: 'John',
    surname: 'Smith',
    getFullName: function(){
        console.log('this of getFullName', this);

        const getName = function(){
            console.log('this of getName', this);
            return this.name;
        }

        return `${getName.call(this)} ${this.surname}`;
    }
}
 */

const user = {
    name: 'John',
    surname: 'Smith',
    getFullName: function(){
        console.log('this of getFullName', this);

        const getName = ()=> this.name;

        return `${getName()} ${this.surname}`;
    }
}


console.log(user.getFullName());


