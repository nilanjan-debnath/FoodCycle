import React, { useEffect } from "react";
import styles from "./css/progress.module.css";
function ProgressThree() {

    useEffect(() => {
        const initCharts = () => {
            const ctx = document.getElementById("barchart3").getContext('2d');

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
                    label: 'Enrolled Last Year',
                    data: [1210, 1530, 1721, 2230, 2687, 3050, 3511, 3250, 3511, 3655, 3930, 4120],
                    backgroundColor: [
                        '#211C6A',
                    ],
                    borderColor: [
                        '#211C6A',
                    ],
                    borderWidth: 1,
                }]
            };

            const config = {
                type: 'line',
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
            <div className={`${styles.three}`}>
                <div className={`${styles.left}`}>
                    <h2 id={`${styles.textHead}`}>Enrolled Last Year</h2>
                    <p id={`${styles.textContenet}`}>Be a part of something bigger than
                        yourself! Last year, we touched the lives of
                        countless individuals and families. Read
                        their inspiring stories and consider joining
                        us in making an even greater impact this
                        year</p>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.chart}`}>
                        <canvas id="barchart3" className={`${styles.barchart}`}></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressThree;