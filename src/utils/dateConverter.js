const getMonthInString = (index) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[index]
}

const converterDate = (date) => {
    if(!date) return {}

    date = new Date(date)

    const year = date.getFullYear() || ''
    const month = date.getMonth() + 1 || ''
    const day = date.getDate() || ''
    const hour = date.getHours() || ''
    const minutes = date.getMinutes() || ''
    const time = date.toLocaleTimeString().slice(0, 5) || ''

    const monthInStr = getMonthInString(date.getMonth()) || ''
    const fullDate = `${day} ${monthInStr} ${year}`.trim()

    return {
        year,
        month,
        day,
        hour,
        minutes,
        time,
        monthInStr,
        fullDate
    }
}

export {
    getMonthInString, 
    converterDate
}