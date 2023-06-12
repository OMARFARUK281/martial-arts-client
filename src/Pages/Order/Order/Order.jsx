import React, { useState } from "react";
import bannerImg from "../../../assets/home/banner 2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useClass from "../../../hooks/useClass";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['Stand', 'Traditional', 'Hybrid', 'Artistic', 'SelfDefense'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [ tabIndex, setTabIndex ] = useState(initialIndex);
    const [ martial ] = useClass();

    const Stand = martial.filter(item => item.category === 'Stand');
    const Traditional = martial.filter(item => item.category === 'Traditional');
    const Hybrid = martial.filter(item => item.category === 'Hybrid');
    const Artistic = martial.filter(item => item.category === 'Artistic');
    const SelfDefense = martial.filter(item => item.category === 'SelfDefense');

  return (
    <div>
        <Helmet>
        <title>Martial Arts | Order</title>        
      </Helmet>

      <Cover img={bannerImg} title="Order Now"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Stand</Tab>
          <Tab>Traditional</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Artistic</Tab>
          <Tab>SelfDefense</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={Stand}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={Traditional}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={Hybrid}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={Artistic}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={SelfDefense}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
