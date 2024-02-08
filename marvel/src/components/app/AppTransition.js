import data from './data';
import { useState, useMemo, useDeferredValue, useTransition } from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    // const deferredValue = useDeferredValue(text);
    const [isPending, startTransition] = useTransition();

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        })

    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange} />

            <hr />

            <div>
                {isPending ? <h4>loading...</h4> :
                    filteredPosts.map(post => (
                        <div key={post._id}>
                            <h4>{post.name}</h4>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default App;
