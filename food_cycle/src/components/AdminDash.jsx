import React, { useState, useEffect } from "react";
import "../../public/styleSheets/admin.css";
import profileImg from "../../public/images/profile.jpg"


function handleDetails(id) {
    document.getElementById(id).open = !document.getElementById(id).open;
};

function AdminDashBoard() {


    useEffect(() => {
        const initCharts = () => {
            const ctx = document.getElementById("barchart").getContext('2d');

            const labels = [
                'Resturant',
                'Others',
            ];

            const data = {
                labels: labels,
                datasets: [{
                    label: 'Food',
                    data: [65, 35],
                    backgroundColor: [
                        '#365486',
                        '#7FC7D9',
                    ],
                    borderColor: [
                        'white',
                    ],
                    borderWidth: 1,
                }]
            };

            const config = {
                type: 'doughnut',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value, index, values) {
                                    return value * 100 + '%';
                                }
                            }
                        }
                    }
                },
            };

            const myChart = new Chart(ctx, config);
        };

        initCharts();
    }, []);

    useEffect(() => {
        const initCharts = () => {
            const ctx1 = document.getElementById("barchart1").getContext('2d');

            const labels1 = [
                'People',
                'Organisation',
            ];

            const data1 = {
                labels: labels1,
                datasets: [{
                    label: 'Money',
                    data: [60, 40],
                    backgroundColor: [
                        '#1D2B53',
                        '#4942E4',
                    ],
                    borderColor: [
                        'white',
                    ],
                    borderWidth: 1,
                    borderSkipped: 'bottom',
                }]
            };

            const config1 = {
                type: 'doughnut',
                data: data1,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value, index, values) {
                                    return value * 100 + '%'; // Append 'm' to the tick label
                                }
                            }
                        }
                    }
                },
            };

            const myChart1 = new Chart(ctx1, config1);

        };

        initCharts();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="box1">
                    <div className="image">
                        <img src={profileImg} alt="" />
                        <div className="name">
                            <h1>Nilanjan Debnath</h1>
                            <p>Welcome Back</p>
                        </div>
                    </div>
                    <div className="text">
                        <h1>&#8377; 7000</h1>
                        <p>Account Balance</p>
                        <h1><i id="foodLogo" className="fa-solid fa-plate-wheat"></i> 100</h1>
                        <p>Food Quantity (per Person)</p>
                    </div>
                    <div className="donationBox">
                        <div className="food">
                            <h1>Food Donation</h1>
                            <div className="info">
                                <h5>Last Week</h5>
                                <h5>712</h5>
                            </div>
                            <div className="info">
                                <h5>Last Month</h5>
                                <h5>3024</h5>
                            </div>
                        </div>

                        <div className="money">
                            <h1>Money Donation</h1>
                            <div className="info">
                                <h5>Last Week</h5>
                                <h5>&#8377; 12000</h5>
                            </div>
                            <div className="info">
                                <h5>Last Month</h5>
                                <h5>&#8377; 48000</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <h1>Donation Requests</h1>
                    <div className="topBox">
                        <div className="leftBox">
                            <h3>Food Donation Requests</h3>
                            <div className="graph">
                                <div className="chart">
                                    <canvas id="barchart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="rightBox">
                            <div className="count">
                                <h3>Total Food Donation Request</h3><h1>30</h1>
                            </div>
                            <div className="count">
                                <h3>Total Food Donation Ammount</h3><h1>100</h1>
                            </div>
                        </div>
                    </div>
                    <h1 id="headingText">People and Resturant</h1>
                    <div className="details">
                        <details className="showDetails" id="showDetails1">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <h3>for 5 people</h3>
                                        <button id="spanBtn" onClick={() => handleDetails('showDetails1')}>Details</button>

                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Food Details:</strong>
                                    <h3>Vat, Dal, Badhakopir tarkari, Macher jhol, Chatni</h3>
                                </div>
                                <div className="row">
                                    <strong>Address:</strong>
                                    <h3>42/1, B B Ganguly Road, B B Ganguly Road, Lal Bazar, Bou Bazaar, Kolkata, West Bengal 700012
                                        Near Central Plaza</h3>
                                </div>
                            </p>
                        </details>
                        <details className="showDetails" id="showDetails2">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <h3>for 5 people</h3>
                                        <button id="spanBtn" onClick={() => handleDetails('showDetails2')}>Details</button>

                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Food Details:</strong>
                                    <h3>Vat, Dal, Badhakopir tarkari, Macher jhol, Chatni</h3>
                                </div>
                                <div className="row">
                                    <strong>Address:</strong>
                                    <h3>42/1, B B Ganguly Road, B B Ganguly Road, Lal Bazar, Bou Bazaar, Kolkata, West Bengal 700012
                                        Near Central Plaza</h3>
                                </div>
                            </p>
                        </details>
                        <details className="showDetails" id="showDetails3">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <h3>for 5 people</h3>
                                        <button id="spanBtn" onClick={() => handleDetails('showDetails3')}>Details</button>

                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Food Details:</strong>
                                    <h3>Vat, Dal, Badhakopir tarkari, Macher jhol, Chatni</h3>
                                </div>
                                <div className="row">
                                    <strong>Address:</strong>
                                    <h3>42/1, B B Ganguly Road, B B Ganguly Road, Lal Bazar, Bou Bazaar, Kolkata, West Bengal 700012
                                        Near Central Plaza</h3>
                                </div>
                            </p>
                        </details>
                        <details className="showDetails" id="showDetails4">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <h3>for 5 people</h3>
                                        <button id="spanBtn" onClick={() => handleDetails('showDetails4')}>Details</button>
                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Food Details:</strong>
                                    <h3>Vat, Dal, Badhakopir tarkari, Macher jhol, Chatni</h3>
                                </div>
                                <div className="row">
                                    <strong>Address:</strong>
                                    <h3>42/1, B B Ganguly Road, B B Ganguly Road, Lal Bazar, Bou Bazaar, Kolkata, West Bengal 700012
                                        Near Central Plaza</h3>
                                </div>
                            </p>
                        </details>
                    </div>
                </div>
                <div className="box3">
                    <h1>Money Donation Requests</h1>
                    <div className="topBox">
                        <div className="leftBox">
                            <h3>Money Donation Requests</h3>
                            <div className="graph">
                                <div className="chart">
                                    <canvas id="barchart1"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightBox">
                        <div className="count">
                            <h3>Total Money Donation Request</h3><h1>85</h1>
                        </div>
                    </div>
                    <div className="details">
                        <details className="showDetails" id="payDetails1">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <button id="spanBtn" onClick={() => handleDetails('payDetails1')}>&#8377;10000</button>
                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Date:</strong>
                                    <h3>06 /02 /2024</h3>
                                    <strong>Time:</strong>
                                    <h3>07.28 PM</h3>
                                </div>
                            </p>
                        </details>
                        <details className="showDetails" id="payDetails2">
                            <summary>
                                <div id="nameDe">
                                    <h3>Nilanjan Debnath</h3>
                                    <div id="btnBox">
                                        <button id="spanBtn" onClick={() => handleDetails('payDetails2')}>&#8377;10000</button>
                                    </div>
                                </div>
                            </summary>
                            <p>
                                <div className="row">
                                    <strong>Date:</strong>
                                    <h3>06 /02 /2024</h3>
                                    <strong>Time:</strong>
                                    <h3>07.28 PM</h3>
                                </div>
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminDashBoard;