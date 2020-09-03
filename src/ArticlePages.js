import React from 'react';
import {useParams} from "react-router-dom";

function ArticlePage() {
    const {id} = useParams()
    return (<h1>Article {id}</h1>)
}

export default ArticlePage