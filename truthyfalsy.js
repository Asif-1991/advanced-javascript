// TruthyFalsy
//=============================
// false       || true
// 0           || " "
// ""          || '0'
// undefined   || []
// null        || {}
// Nan         || 42
// ``          || "false"
// document.all|| new Date()
// on: Biglnt  || -42
// -0          ||  12n 
//             || infinity
//             ||-infinity
//             || 3.14
//             ||-3.14

const name = "account";

if(name.length > 5){
    console.log("condition is true")
}else{
    console.log("condition is false");
};
