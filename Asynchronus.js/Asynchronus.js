/****************************** Inner funcation************************************/

'use strict'

this.table = "Window table";
const clean = function(){
    console.log(`${this.table} cleaned !!`);

    const doubleclean = function(){
        console.log(`${this.table} Double cleaned !!`);

        const trippleclean = function(){
            console.log(`${this.table} Tripple cleaned !!`);
        }
        trippleclean.call(this);

    }
    doubleclean.call(this);
}
clean.call(this);



this.table = "window table";
const clean1 = () => {
 console.log(`${this.table} cleaned !!`);

    const doubleclean1 = () => {
        console.log(`${this.table} Double cleaned !!`);

        const trippleclean1= () => {
            console.log(`${this.table} Tripple cleaned !!`);
        }

        trippleclean();
    }
}