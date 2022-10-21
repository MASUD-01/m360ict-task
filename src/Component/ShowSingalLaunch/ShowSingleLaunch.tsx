import React from 'react';
import { useParams } from "react-router-dom"

const ShowSingleLaunch = () => {
    let { userId } = useParams()
    return (
        <div>
            <h1>
                this is single launch
            </h1>

        </div>
    );
};

export default ShowSingleLaunch;