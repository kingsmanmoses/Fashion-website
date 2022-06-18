import React from 'react';
import InfoSection from '../../components/infosect/InfoSection';
import { homeObjFour, homeObjThree, homeObjTwo } from '../Homepage/Data';

const Products = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    );
};

export default Products;
