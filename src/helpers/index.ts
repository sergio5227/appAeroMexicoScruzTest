export const capitalizeFirstLetter = (string:string) => {
    const toLowerCase = string.toLowerCase()
    return (toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1)).replace(/\_/g, ' ');
}

export const convertAbbreviationCountry = (country:string) => {

    switch (country) {
        case 'MEX':
            return 'Mexico city';
        case 'CUN':
                return 'Cancún';
        default:
            break;
    }

}

export const geTimeFromDate = (date:Date):string=> {
    const event = new Date(date);
    return event.toLocaleTimeString('it-IT').slice(0, -3)
}

export const toHoursAndMinutes =(totalMinutes:number)=> {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
  }


  export const formatDate = (date:string) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const toConvert = new Date(date);
    return `${days[toConvert.getDay()]}, ${monthNames[toConvert.getMonth()]} ${toConvert.getDate()}`;
  }