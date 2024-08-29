// tostring method 
const Num=34;
const strNum=Num.toString();

// bigInt 
const big=BigInt(`10000003219990`);
// toFixed method : for number round off

const dec=49.955;
const formattedNum=dec.toFixed(1);

// parsInt
const price="price: 100 USD";
const temp=parseInt(price.replace("price:","").replace("USD",""),10);
console.log(temp);

// binary 
const binary="1101";
const convertBinary=parseInt(binary,2);
console.log(convertBinary);

// parseFloat 
const flt="$99.99";
const floatnum=parseFloat(flt.replace("$",""));
console.log(floatnum);


