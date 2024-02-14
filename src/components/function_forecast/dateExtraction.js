export function dataExtraction(timestamp, mode) {
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