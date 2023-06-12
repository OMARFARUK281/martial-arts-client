import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import masterImg from '../../../assets/home/martial-arts.jpg';
import standImg from '../../../assets/martial/08.jpg';
import traditionalImg from '../../../assets/martial/09.jpg';
import hybridImg from '../../../assets/martial/02.jpg'
import artisticImg from '../../../assets/martial/07.jpg'
import selfDefenseImg from '../../../assets/martial/10.jpg'
import useClass from "../../../hooks/useClass";
import AllCategory from "../AllCategory/AllCategory";

const AllClass = () => {
    const [martial] = useClass();

    const Stand = martial.filter(item => item.category === 'Stand');
    const Traditional = martial.filter(item => item.category === 'Traditional');
    const Hybrid = martial.filter(item => item.category === 'Hybrid');
    const Artistic = martial.filter(item => item.category === 'Artistic');
    const SelfDefense = martial.filter(item => item.category === 'SelfDefense');

  return (
    <div>
      <Helmet>
        <title>Martial Arts | Class</title>        
      </Helmet>
      <Cover img={masterImg} title="Class List"></Cover>

      <AllCategory items={Stand} title={'Stand'} img={standImg}></AllCategory>
      <AllCategory items={Traditional} title={'Traditional'} img={traditionalImg}></AllCategory>
      <AllCategory items={Hybrid}  title={'Hybrid'} img={hybridImg}></AllCategory>
      <AllCategory items={Artistic}  title={'Artistic'} img={artisticImg}></AllCategory>
      <AllCategory items={SelfDefense}  title={'SelfDefense'} img={selfDefenseImg}></AllCategory>
    </div>
  );
};

export default AllClass;
