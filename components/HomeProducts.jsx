import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const HomeProducts = ({ products }) => {
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
                            <div className='item-container'>
                                <div className='item-image'>
                                    <img src="" alt="" />
                                </div>
                                <p>item-name</p>
                                <p>R 35</p>
                            </div>
                            <div className='item-container'>
                                <div className='item-image'>
                                    <img src="" alt="" />
                                </div>
                                <p>item-name</p>
                                <p>R 35</p>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}

export default HomeProducts