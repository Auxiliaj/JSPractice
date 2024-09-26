function dayOfWeek(dayNumber){
    let day;

    switch (dayNumber) {
        case 0:
            day="Sunday";
            break;
         case 1:
            day="Monday";
             break;
         case 2:
             day="Tuesday";
             break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thrusday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            console.log("Invalid Day");
            break;
    }
    return(day);

}
console.log(dayOfWeek(5));

let browser="chrome";
switch (browser) {
    case "chrome":
        console.log("Chrome browser is launching");
        break;
    case "firefox":
        console.log("firefox browser is launching");
         break;
     case "edge":
            console.log("edge browser is launching");
            break;       
    default:
        console.log("Give valid bowser details"+browser);
        break;
}