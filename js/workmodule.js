/* NPM => Node Package Manager => by33tmd 3la el (NodeJs) back end method - h3mlha dawnload {}lazm windows 8.1 :( el 7war da klo
    lazm azakro mn el awl*/





    /* new Array methods and very Important =>*/

   export let ages = [12,23,11,9,25,18,10,20,30,35] ;
    /*let adults=[];
    for(i=0 ; i < ages.length ; i+=1){
        if(ages[i]>16){
            adults.push(ages[i]);
        }
       
    };
    console.log(adults);  => tab3n el code da mafhom gdn hn3mlo b2a b el method el gdeda */

   /* let adults = ages.filter((x)=>{return x > 16});     //arrow function aw self invoked function 3ady 
    console.log(adults);                               //ka2ny b2oly faltrly el array w hat el (x) el exat ely akbr mn 16 bs ez mmkn a7ot ay 7aga 3'er x
*/

export let adults = ages.filter(x => x > 16 );   // keda 4elna el return w el akwas 3ady bynf3 keda f el arrow function lma ykol mot3'yr wa7d (x)
 console.log(adults);                      // w el function hta5od return by defoalt

/* let newAge =[];
for(i=0 ; i < ages.length ; i+=1){
    let y= ages[i]+10;
    newAge.push(y);
}
console.log(newAge);  => el code da m3nah en zwdly 3la kol el ages 10 3l4an yb2a el new ages bs hnktbo b2a b new method*/

export let newAge = ages.map((x)=>{return x+10});   // el map de bml beha action 3la el data
console.log(newAge);

export let users =[
    {name:'ahmed',gender:'male' , age:35},
    {name:'ali',gender:'male' , age:15},
    {name:'aya',gender:'female', age: 25},
    {name:'gehan',gender:'female', age:5 }
];

export let userAges = users.filter( user => user.age > 16 ).map((user) => {  // gamed m4 m7tag 4ar7
    if(user.gender=='male'){
        user.name='mr.'+user.name
        return user
    }
    else{
        user.name='mrs.'+user.name
        return user
    }
} )
//console.log(userAges);

/* let sum=0; 
for (let i=0 ; i<ages.length ; i+=1){       //=> de btgm3 kol 3nasr el array =193 --hn3mlha b method gdeda
    sum+=  ages[i]
}
console.log(sum); */
export let sum =ages.reduce((sum , age)=>{return sum+=age},20);  //typ el reduce de bta5od 2 paramters asmehom zy mna 3ayz
//(1= el makan ele hgm3 aw htr7 feh , el mota3'yer ele hym4y 3la 3onsr 3onsr f el array)=>{return sum+=age}de mafhoma 
// lw 3amlya o5ra yb2a {return sum(-,*)=age} -- el (0 da el keda el eftradya le el sum (intiat value)) f 7alat el darb ha5lyha b (1) => bla4 a7oto asasn
// ela lw ana fe3ln 3ayz abd2 b rakm mo3yn masln lw 7tet (20) hyb2a el magno3 213 hygm3o m3ahom---sebha fadya ya brooooooooo