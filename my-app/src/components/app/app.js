import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';


import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="Search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList />
            <EmployeesAddForm />
        </div>
    );
}

export default App;