import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle heading="Featured Item" subHeading="Check It Out"></SectionTitle>
            <div className='md:flex justify-center items-center px-36 pb-20 pt-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus, voluptas et ipsum vel, magnam maxime explicabo nisi, natus autem repellendus dignissimos laboriosam officia impedit repellat tempore corrupti eveniet laborum est veritatis quisquam beatae optio a esse! Error, fugiat veniam praesentium quasi libero fugit eveniet quis et, cum ex consectetur.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;