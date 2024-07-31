this.session ="Javascript";

this.room ={
    session:"React",
    subject:function() {
        console.log('${ this.session }');
        console.log('${ session }');
    }
};

let classroomn={
    session:"Mean/Mern",
    subject:function(){
        console.log('${this.session}')
        console.log('${session}')
    }
}

this.room.subject();
classroomn.subject();

// output :

//"React"
//"Javascript"
//"Mean/Mern"
//"Javascript"