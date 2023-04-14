
function Rand()
{ 
    switch (arguments.length) {
    case 0:
        return Math.random(); 
    case 1:
        const min=arguments[0]; const max=arguments[1];
        return Math.random() * (max - min + 1) + min;
    default:
        break;
    }
}

function RandInt(min, max)
{ return Math.floor(Math.random() * (max - min + 1)) + min; }

export {Rand, RandInt};