import React from 'react';
import MartialCard from '../../../components/MartialCard/MartialCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 gap-4 pb-4">
            {
                items.map(item => <MartialCard
                key={item.id}
                item={item}
                ></MartialCard> )
            }
            </div>
    );
};

export default OrderTab;