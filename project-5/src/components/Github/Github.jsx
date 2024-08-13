import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let URL = "https://api.github.com/users/shreyashj9600";
        fetch(URL)
            .then((responce) => responce.json())
            .then((data) => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
                <p>My userName : {data.login}</p>
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </>
    );
}

export default Github;
