import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IDPRODUCTSAPI } from "../../../Constants/api"

const ProductId = (props) => {

    const {id} = useParams();

    const [detail, setDetail] = useState();


    const getDetail = async () => {
        const res = await axios.get(`${IDPRODUCTSAPI}${id}`);
        setDetail(res.data);
    }
    useEffect(() => {   
        getDetail()
    }, [id])



    return (
        <div>
            {detail && detail.id}
        </div>
    );
};

export default ProductId;