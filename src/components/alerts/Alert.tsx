import { ALERT_TYPES } from "models/enums";
export interface AlertProps {
    type: ALERT_TYPES;
    message: string;
}

const Alert = (props: AlertProps) => {
    
    const alertMessage = props.type === ALERT_TYPES.INFO? <div className="alert-info" data-testid="info"  >&#128172; {props.message}</div> : <></>;
    const errorMessage = props.type === ALERT_TYPES.ERROR? <div className="alert-error" data-testid="error" >&#9940; {props.message}</div> : <></>;

    return (
        <>
            {props.message !== ''? (alertMessage) : (<></>)}
            {props.message !== ''? (errorMessage) : (<></>)}
        </>
    )
}

export default Alert;