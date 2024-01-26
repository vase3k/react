import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';
import { Component } from 'react';
import './app.css';

/* class WhoAmI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: 27,
            text: "+++"
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </div >
        )
    }
}

function App() {
    return (
        <div className='app'>
            <WhoAmI name='John' surname='vinogradov' link="https://3dnews.ru/" />
            <WhoAmI name='Alex' surname="SD" link="https://dzen.ru/?utm_referrer=www.yandex.ru" />
        </div>
    )
}
 */
function App() {

    const data = [
        { name: "John C", salary: 800, id: 1 },
        { name: "Alex M.", salary: 3000, id: 2 },
        { name: "Carl W.", salary: 5000, id: 3 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="Search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;