export function dateExtraction(timestamp, mode) {
    // Convert the timestamp to milliseconds
    const date = new Date(timestamp * 1000);
    
    // Get the day of the month (1-31)
    const day = date.getDate(); 

    // Get the month (0-11), then add 1 to get the standard month number (1-12)
    const month = date.getMonth() + 1; 

    // Get the year 
    const year = date.getFullYear(); 

    // Return desired info
    if (mode === 'day') {
        return day;
    }
    else if (mode === 'month') {
        return month;
    }
    else if (mode === 'year') {
        return year;
    }

    return date;
}

export function dateToMonthDay(date_string) {
    const date = new Date(date_string);
    const month = date.toLocaleString('default', { month: 'long' }).slice(0, 3);
    const day = date.getDate();

    return `${month}, ${day}`;
}

export function dateToTime(date_string) {
    const timeStr = date_string.split(" ")[1];
    const timeArr = timeStr.split(":");
    const hour = timeArr[0];
    const minute = timeArr[1];
  
    return `${hour}:${minute}`;
  }