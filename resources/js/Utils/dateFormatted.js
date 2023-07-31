import moment from 'moment'

export default function dateFormatted() {
    function formatted(date) {
        return moment(date).format('DD/MM/YYYY HH:mm:ss')
    }

    function returnFormatted(value) {
        if (!value) return null
        if (value[1] !== undefined && value[1] !== null) {
            const date1 = new Date(value[0])
            const date2 = new Date(value[1])
            const day1 = date1.getDate()
            const month1 = date1.getMonth() + 1
            const year1 = date1.getFullYear()
            const day2 = date2.getDate()
            const month2 = date2.getMonth() + 1
            const year2 = date2.getFullYear()

            return `${day1}/${month1}/${year1} - ${day2}/${month2}/${year2}`
        }
        const date = new Date(value)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    }

    return {
        formatted,
        returnFormatted,
    }
}
