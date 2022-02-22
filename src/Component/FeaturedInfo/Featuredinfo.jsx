import React from 'react';
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material/';


export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,8621</span>
                    <span className="featuredMoneyRate">-8 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,8621</span>
                    <span className="featuredMoneyRate">+786 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,8621</span>
                    <span className="featuredMoneyRate">+786 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
        </div>
    );
}
