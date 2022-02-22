import React from 'react';
import './widgetsLg.css'

const Button = ({ type }) => {
    return (
        <button className={"widgetLgButton " + type}>{type}</button>
    )
}



function WidgetsLg() {
    return (
        <div className="widgetsLg">
            <h3 className="widgetLgTitle">
                Latest Transaction
            </h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.dribbble.com/users/3305260/screenshots/6364839/compleat--capman_4x.jpg?compress=1&resize=1600x1200&vertical=top"
                                alt="logo"
                                className="widgetLgImg"
                            />
                            Paul London
                        </td>
                        <td className="widgetLgDate">31/01/2000</td>
                        <td className="widgetLgAmount">$2000</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>



                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.dribbble.com/users/3305260/screenshots/6364839/compleat--capman_4x.jpg?compress=1&resize=1600x1200&vertical=top"
                                alt="logo"
                                className="widgetLgImg"
                            />
                            Paul London
                        </td>
                        <td className="widgetLgDate">31/01/2000</td>
                        <td className="widgetLgAmount">$2000</td>
                        <td className="widgetLgStatus"><Button type="Pending" /></td>
                    </tr>



                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.dribbble.com/users/3305260/screenshots/6364839/compleat--capman_4x.jpg?compress=1&resize=1600x1200&vertical=top"
                                alt="logo"
                                className="widgetLgImg"
                            />
                            Paul London
                        </td>
                        <td className="widgetLgDate">31/01/2000</td>
                        <td className="widgetLgAmount">$2000</td>
                        <td className="widgetLgStatus"><Button type="Declined" /></td>
                    </tr>



                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.dribbble.com/users/3305260/screenshots/6364839/compleat--capman_4x.jpg?compress=1&resize=1600x1200&vertical=top"
                                alt="logo"
                                className="widgetLgImg"
                            />
                            Paul London
                        </td>
                        <td className="widgetLgDate">31/01/2000</td>
                        <td className="widgetLgAmount">$2000</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetsLg;
