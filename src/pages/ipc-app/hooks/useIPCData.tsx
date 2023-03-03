
import { useEffect, useRef, useState } from "react";
import { IIPC } from "pages/ipc-app/models/ipc.model";
import { filterDataByDay, filterDataByHour, filterDataByMonth, filterDataByYear } from "../utils/utils";
import { DEFAULT_VALUES } from "components/fields/enums";

const useIPCData = (data: Array<IIPC>): any => {

    const [x, setX] = useState<string[] | []>([])
    const [y, setY] = useState<number[] | []>([])
    const [yearsOptions, setYearsOptions] = useState<Array<number> | []>([])
    const [monthsOptions, setMonthsOptions] = useState<Array<number> | []>([])
    const [daysOptions, setDaysOptions] = useState<Array<number> | []>([])
    const [hoursOptions, setHoursOptions] = useState<Array<number> | []>([])
    const [reloadCatalogs, setReloadCatalogs] = useState<boolean>(false)
    const filteredDataRef = useRef<Array<IIPC>>(data);
    const [hourSelected, setHourSelected] = useState<string>('')
    const [daySelected, setDaySelected] = useState<string>('')
    const [monthSelected, setMonthSelected] = useState<string>('')
    const [yearSelected, setYearSelected] = useState<string>('')
    

    const onChangeYear = (value:string) => { 
        setYearSelected(value)
     }

    const onChangeMonth = (value:string) => {
        setMonthSelected(value)
    }
    const onChangeDay = (value:string) => {
        setDaySelected(value)
    }
    
    const onChangeHour = (value:string) => {
        setHourSelected(value)
    }

    useEffect(() => {
        const applyFilter = async () => {
            let allData: Array<IIPC> = [...data];
            if (yearSelected !== DEFAULT_VALUES.SELECT) { // apply filter
                const { filteredX, filteredY, newData } = filterDataByYear(allData, yearSelected)
                setX(filteredX)
                setY(filteredY)
                allData = [...newData];
            } 
            if (monthSelected !== DEFAULT_VALUES.SELECT) {
                const { filteredX, filteredY, newData } = filterDataByMonth(allData, monthSelected)
                setX(filteredX)
                setY(filteredY)
                allData = [...newData];
            } 
            if (daySelected !== DEFAULT_VALUES.SELECT) { 
                const { filteredX, filteredY, newData } = filterDataByDay(allData, daySelected)
                setX(filteredX)
                setY(filteredY)
                allData = [...newData];
            } 
            if (hourSelected !== DEFAULT_VALUES.SELECT) { 
                const { filteredX, filteredY, newData } = filterDataByHour(allData, hourSelected)
                setX(filteredX)
                setY(filteredY)
                allData = [...newData];
            }
            filteredDataRef.current = allData;
            setReloadCatalogs(prev => prev = !prev)
        }
        applyFilter()
    }, [yearSelected,monthSelected,daySelected,hourSelected,
        setX, setY, setReloadCatalogs]);



    useEffect(() => {
        async function processData() {
            // Setting options for filtering
            let data = filteredDataRef.current;
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
    }, [setX, setY, setYearsOptions, setMonthsOptions, setDaysOptions, setHoursOptions, 
        reloadCatalogs])

    return {
        x, y, yearsOptions, monthsOptions, daysOptions, hoursOptions,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
        onChangeHour
    }
}

export default useIPCData;