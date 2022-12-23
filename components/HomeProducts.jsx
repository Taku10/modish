import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const HomeProducts = () => {
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
                        <h2>Any content 1</h2>
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