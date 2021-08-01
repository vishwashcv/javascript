const readpermission = 4;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0;
mypermission = mypermission | readpermission;

let message = (mypermission & writepermission) ? 'yes' : 'no';   

console.log(message);