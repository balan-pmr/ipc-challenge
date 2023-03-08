import LineGraph from "components/graphs/Line.Graph"
import { IIPC, IIPCCategory } from "pages/ipc-app/models/ipc.model";
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
        yearsOptions, monthsOptions, daysOptions, hoursOptions, categoryOptions, showAllCategories,dataCategories,
        onChangeYear,
        onChangeMonth,
        onChangeDay,
        onChangeHour,
        onChangeCategory,
        onShowAllCategories
    } = useIPCData(props.data);


    if (props.data.length === 0) { return (<div>No IPC data to graph.</div>) }
    else {

        return (
            <>
                <div>
                    {!showAllCategories && <>
                        <label><h3>Select a category for x Axis</h3> </label>
                        <Select label="" id="category" options={categoryOptions} defaultValue={categoryOptions[0]} onChange={onChangeCategory}/>
                    </>}
                    <label><h3>Select view for all categories:</h3> </label>
                    <input type="radio" id='all' value="all" checked={showAllCategories} onClick={e => { onShowAllCategories(e) }} onChange={e => { }} />
                    <label htmlFor="all">Show all categories</label><br></br>
                </div>
                {!showAllCategories && <LineGraph labels={x} data={y} title='IPC Indicator Dashboard' tooltipLabel="IPC" />}
                {showAllCategories && (<div className="cards">
                    {
                        dataCategories.map( (category:IIPCCategory, index:number) => (<LineGraph key={index} labels={x} data={category.yData} title={'IPC Indicator'} tooltipLabel={category.category} /> ) )
                    }
                </div>
                )}
                <div className='table-content'>
                    <label><h3>Date filters</h3> </label>
                    <Select label="Year:" id="year" options={yearsOptions} onChange={onChangeYear} />
                    <Select label="Month:" id="month" options={monthsOptions} onChange={onChangeMonth} />
                    <Select label="Day:" id="day" options={daysOptions} onChange={onChangeDay} />
                    <Select label="Hour:" id="hour" options={hoursOptions} onChange={onChangeHour} />
                </div>
            </>
        )
    }


}

export default IPCGraph;

