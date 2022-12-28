import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { urlFor } from '../lib/client';
import BestSeller from './BestSeller';
import Featured from './Featured';
import Sale from './Sale';
import TopRate from './TopRate';

const HomeProducts = ({ products }) => {


    console.log(products[2].bestseller)
    return (
        <div className='home-products-container'>
            <h1>Our Products</h1>
            <div className='tab-container'>
                <Tabs>
                    <TabList className='tablist'>
                        <Tab>Best Seller</Tab>
                        <Tab>Featured</Tab>
                        <Tab>Sale</Tab>
                        <Tab>Top Rate</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='item-panel-wrapper'>
                            {products.filter((item) => item.bestseller ===true).map((item) => (
                                <BestSeller item={item} />
                              
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='item-panel-wrapper'>
                            {products.filter((item) => item.featured ===true).map((item) => (
                                <Featured item={item} />
                              
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='item-panel-wrapper'>
                            {products.filter((item) => item.sale ===true).map((item) => (
                                <Sale item={item} />
                              
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='item-panel-wrapper'>
                            {products.filter((item) => item.top_rate ===true).map((item) => (
                                <TopRate item={item} />
                              
                            ))}
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}

export default HomeProducts