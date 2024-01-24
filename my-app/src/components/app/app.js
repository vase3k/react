import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';
import './app.css';

function WhoAmI({ name, surname, link }) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        /*         <div className="app">
                    <AppInfo />
        
                    <div className="Search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <EmployeesList />
                    <EmployeesAddForm />
                </div> */
        <div className='app'>
            <WhoAmI name={() => 'John'} surname="vinogradov" link="https://3dnews.ru/" />
            <WhoAmI name={() => 'Alex'} surname="Gredov" link="https://3dnews.ru/" />
        </div>
    );
}

export default App;