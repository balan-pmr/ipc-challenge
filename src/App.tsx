import './App.css';
import Dashboard from 'pages/ipc-app/components/Dashboard';
import Alert from 'components/alerts/Alert';
import { ALERT_TYPES } from 'components/enums/enums';

function App() {
  return (
    <div className="container">
      <Alert message='Loading data...' type={ALERT_TYPES.INFO} />
      <Dashboard/>
    </div>
  );
}

export default App;
