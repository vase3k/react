import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';

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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
                { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: "",
            filter: "all"
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            //const index = data.findIndex(elem => elem.id === id);
            //            const before = data.slice(0, index);
            //            const after = data.slice(index + 1);
            //            const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        /*         this.setState(({ data }) => {
                    const index = data.findIndex(elem => elem.id === id)
        
                    const old = data[index];
                    const newItem = { ...old, increase: !old.increase };
                    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        
                    return {
                        data: newArr
                    }
                }) */
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    OnUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app" >
                <AppInfo employees={employees}
                    increased={increased} />

                <div className="Search-panel">
                    <SearchPanel OnUpdateSearch={this.OnUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;