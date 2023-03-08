
import { useEffect, useMemo, useState } from "react";
import { IIPC, IIPCCategory } from "pages/ipc-app/models/ipc.model";
import { filterDataByDay, filterDataByHour, filterDataByMonth, filterDataByYear } from "../utils/utils";
import { DEFAULT_VALUES, IPC_VALUES } from "models/enums";

const useIPCData = (data: Array<IIPC>): any => {

    const [x, setX] = useState<string[] | []>([])
    const [y, setY] = useState<number[] | []>([])
    const [yearsOptions, setYearsOptions] = useState<Array<number> | []>([])
    const [monthsOptions, setMonthsOptions] = useState<Array<number> | []>([])
    const [daysOptions, setDaysOptions] = useState<Array<number> | []>([])
    const [hoursOptions, setHoursOptions] = useState<Array<number> | []>([])
    const [filteredData, setFilteredData] = useState<Array<IIPC>>([])
    const [hourSelected, setHourSelected] = useState<string>('')
    const [daySelected, setDaySelected] = useState<string>('')
    const [monthSelected, setMonthSelected] = useState<string>('')
    const [yearSelected, setYearSelected] = useState<string>('')
    //const [categoryOptions, setCategoryOptions] = useState<Array<string> | []>([])
    const [categorySelected, setCategorySelected] = useState<IPC_VALUES>(IPC_VALUES.PRICE)
    const [showAllCategories, setShowAllCategories] = useState<boolean>(false)
    const categoryOptions = useMemo(()=>{ return [IPC_VALUES.PRICE, IPC_VALUES.PERCENTAGE_CHANGE, IPC_VALUES.VOLUME, IPC_VALUES.CHANGE] },[]);

    const onChangeCategory = (value: IPC_VALUES) => { setCategorySelected(value) }

    const onChangeYear = (value: string) => { setYearSelected(value) }

    const onChangeMonth = (value: string) => { setMonthSelected(value) }

    const onChangeDay = (value: string) => { setDaySelected(value) }

    const onChangeHour = (value: string) => { setHourSelected(value) }



    useEffect(() => {
        const applyFilter = async () => {
            let allData: Array<IIPC> = [...data];
            //console.log({yearSelected, monthSelected, daySelected, hourSelected})
            if (yearSelected !== DEFAULT_VALUES.SELECT) { // apply filter
                const { newData } = filterDataByYear(allData, yearSelected)

                allData = [...newData];
            }
            if (monthSelected !== DEFAULT_VALUES.SELECT) {
                const { newData } = filterDataByMonth(allData, monthSelected)
                allData = [...newData];
            }
            if (daySelected !== DEFAULT_VALUES.SELECT) {
                const { newData } = filterDataByDay(allData, daySelected)

                allData = [...newData];
            }
            if (hourSelected !== DEFAULT_VALUES.SELECT) {
                const { newData } = filterDataByHour(allData, hourSelected)

                allData = [...newData];
            }
            setFilteredData(allData);
        }
        if (data.length > 0) { applyFilter() }

    }, [setFilteredData,
        yearSelected, monthSelected, daySelected, hourSelected, data]);


    useEffect(() => {
        async function createOptions() {
            // Setting options for filtering
            //console.log('Setting options for filtering')
            let data = filteredData;
            setX(data.map(ipc => ipc.date.toLocaleString()))
            setY(data.map(ipc => ipc[categorySelected]))
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
            //setCategoryOptions([IPC_VALUES.PRICE, IPC_VALUES.PERCENTAGE_CHANGE, IPC_VALUES.VOLUME, IPC_VALUES.CHANGE]);
        }
        if (data.length > 0) { createOptions() }
    }, [setX, setY, setYearsOptions, setMonthsOptions, setDaysOptions, setHoursOptions,
        data, categorySelected, filteredData])


    useEffect(() => {
        return () => {
            //console.log('Unmounting IPC Graph')
        }
    }, [])

    const dataCategories = useMemo( ():Array<IIPCCategory> =>{
        if(filteredData.length > 0){
            let dataCategory: Array<IIPCCategory> = categoryOptions.map((category)=> ({ category: category, yData : filteredData.map(ipc => ipc[category]) }) )
            return dataCategory;
        }else{
            return []
        }
    },[filteredData ,categoryOptions])   


    const onShowAllCategories = (e:any) => {
        setShowAllCategories( !showAllCategories )
    }

    return {
        x, y, yearsOptions, monthsOptions, daysOptions, hoursOptions, categoryOptions, showAllCategories,dataCategories,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
        onChangeHour,
        onChangeCategory,
        onShowAllCategories
    }
}

export default useIPCData;