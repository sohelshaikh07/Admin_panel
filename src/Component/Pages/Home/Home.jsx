import React from 'react';
import Chart from '../../Chart/Chart';
import Featuredinfo from '../../FeaturedInfo/Featuredinfo';
import './home.css'
import { data }  from '../../../DummyData'
import WidgetsSm from '../../widgetsSm/WidgetsSm';
import WidgetsLg from '../../widgetsLg/WidgetsLg';

const Home = () => {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart title="User Analytics" data={data} dataKey="Active User" grid />
           
            <div className="homeWidgets">
                <WidgetsSm />
                <WidgetsLg />
            </div>
        </div>
  )
};

export default Home;
