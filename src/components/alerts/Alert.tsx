import { ALERT_TYPES } from "components/enums/enums";
interface AlertProps {
    type: ALERT_TYPES;
    message: string;
}

const Alert = (props: AlertProps) => {
    const alertMessage = props.type === ALERT_TYPES.INFO? <div className="alert-info" > &#128172;  {props.message}  </div> : <></>;
    const errorMessage = props.type === ALERT_TYPES.ERROR? <div className="alert-error" > &#9940;  {props.message}  </div> : <></>;
    return (
        <>
            {alertMessage}
            {errorMessage}  
        </>
    )
}

export default Alert;