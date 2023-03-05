import LineGraph from "components/graphs/Line.Graph"
import { IIPC } from "pages/ipc-app/models/ipc.model";
import useIPCData from "../hooks/useIPCData";
import Select from "components/fields/Select";

interface IPCGraphProps {
    data: Array<IIPC>;
}

// Here we need to process data and add controlls

const IPCGraph = (props: IPCGraphProps) => {

    const {
        x,
        y,
        yearsOptions, monthsOptions, daysOptions, hoursOptions, categoryOptions,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
        onChangeHour,
        onChangeCategory
    } = useIPCData(props.data);


    return (
        <>
            <div>
                <label>Select a category for x Axis </label><br />
                <Select label="category" id="category" options={categoryOptions} defaultValue={categoryOptions[0]} onChange={onChangeCategory} />
            </div>
            <LineGraph labels={x} data={y} title='IPC Indicator Dashboard' tooltipLabel="IPC" />
            <div>
                <label>Date filters: </label><br />
                <Select label="Year" id="year" options={yearsOptions} onChange={onChangeYear} />
                <Select label="Month" id="month" options={monthsOptions} onChange={onChangeMonth} />
                <Select label="Day" id="day" options={daysOptions} onChange={onChangeDay} />
                <Select label="Hour" id="hour" options={hoursOptions} onChange={onChangeHour} />
            </div>
        </>
    )

}

export default IPCGraph;

