import { useState } from 'react';
import './App.css';

import Form from './form';
import dataContext from './context';

const { Provider } = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "second@example.com",
        text: 'another text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({ ...data, mail: 'test@gmail.com' })
    }

    return (
        <Provider value={{ something: 'something' }} >
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: "name@example.com",
                    text: 'some text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
