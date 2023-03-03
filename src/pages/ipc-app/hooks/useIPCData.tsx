
import { useEffect, useState } from "react";
import { IIPC } from "pages/ipc-app/models/ipc.model";

const useIPCData = (data: Array<IIPC>): any => {

    const [x, setX] = useState<string[] | []>([])
    const [y, setY] = useState<number[] | []>([])
    const [yearsOptions, setYearsOptions] = useState<Array<number> | []>([])
    const [monthsOptions, setMonthsOptions] = useState<Array<number> | []>([])
    const [daysOptions, setDaysOptions] = useState<Array<number> | []>([])
    const [hoursOptions, setHoursOptions] = useState<Array<number> | []>([])

    const onChangeYear = (e: any) => { console.log('onSelectedYear') }
    const onChangeMonth = (e: any) => { console.log('onSelectedM') }
    const onChangeDay = (e: any) => { console.log('onSelectedD') }
    const onChangeHour = (e: any) => {
        let conditionalFilter = [];
        console.log(e)
        if (e !== 'Select an option') {
            // Apply conditionalFilter
            conditionalFilter = data.filter(obj => obj.date.getHours() === Number(e));
        } else {
            conditionalFilter = data;
        }
        const filteredX = conditionalFilter.map(ipc => ipc.date.toLocaleString());
        const filteredY = conditionalFilter.map(ipc => ipc.price);
        setX(filteredX)
        setY(filteredY)
    }

    useEffect(() => {
        async function processData() {
            setX(data.map(ipc => ipc.date.toLocaleString()))
            setY(data.map(ipc => ipc.price))
            const years: Array<number> = data.map(ipc => ipc.date.getFullYear())
            const ySet = new Set<number>(years);
            setYearsOptions(Array.from(ySet))
            const months: Array<number> = data.map(ipc => ipc.date.getMonth())
            const mSet = new Set<number>(months);
            setMonthsOptions(Array.from(mSet))
            const days: Array<number> = data.map(ipc => ipc.date.getDate())
            const dSet = new Set<number>(days);
            setDaysOptions(Array.from(dSet))
            const hours: Array<number> = data.map(ipc => ipc.date.getHours())
            const hSet = new Set<number>(hours);
            setHoursOptions(Array.from(hSet))
        }
        processData();
    }, [setX, setY, setYearsOptions, setMonthsOptions, setDaysOptions, setHoursOptions, data])

    return {
        x, y, yearsOptions, monthsOptions, daysOptions, hoursOptions,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
        onChangeHour
    }
}

export default useIPCData;