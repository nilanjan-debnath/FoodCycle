import React, { useEffect } from "react";
import styles from "./css/progress.module.css";
function ProgressTwo() {

    useEffect(() => {
        const initCharts = () => {
            const ctx = document.getElementById("barchart2").getContext('2d');

            const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];

            const data = {
                labels: labels,
                datasets: [{
                    label: 'Food Donations',
                    data: [1210, 1530, 1721, 2230, 2687, 3050, 3511, 3250, 3511, 3655, 3930, 4120],
                    backgroundColor: [
                        '#FFC7C7',
                        '#ED9ED6',
                        '#C683D7',
                        '#7071E8',
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
                                    return value * 100 + '';
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


    return (
        <>
            <div className={`${styles.two}`}>
                <div className={`${styles.left}`}>
                    <h2 id={`${styles.textHead}`}>Donation Ratio</h2>
                    <p id={`${styles.textContenet}`}>Discover the power of your contribution! Explore
                        our donation ratio to see how your generosity
                        transforms into a diverse array of essential food
                        items, nourishing families and spreading hope.</p>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.chart2}`}>
                        <canvas id="barchart2" className={`${styles.piechart}`}></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressTwo;