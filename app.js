
const SPEED_LIMIT = 70;
const KM_PER_POINT=5;
const POINTS = 12;

checkspeed(129);

function checkspeed(speed) {
    if (speed < SPEED_LIMIT+KM_PER_POINT) {
        console.log('Ok');
    }else{
        const points =Math.floor((speed-SPEED_LIMIT)/KM_PER_POINT);
        if (points >= POINTS) {
            console.log("Guvohnomangiz olib qo'yildi");
        }else{
            console.log(points);
        }
    }    
}