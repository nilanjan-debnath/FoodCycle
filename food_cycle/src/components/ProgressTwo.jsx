import React, { useEffect } from "react";
import styles from "./css/progress.module.css";
function ProgressTwo() {

    useEffect(() => {
        const initCharts = () => {
            const ctx = document.getElementById("barchart2").getContext('2d');

            const labels = [
                'Resturant',
               'People'
            ];

            const data = {
                labels: labels,
                datasets: [{
                    label: 'Food Donations',
                    data: [60, 40],
                    backgroundColor: [
                        '#211C6A',
                        '#ED9ED6'
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