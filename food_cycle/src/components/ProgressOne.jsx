import React, {useEffect} from "react";
import styles from "./css/progress.module.css";
function ProgressOne() {

    useEffect(() => {
        const initCharts = () => {
            const ctx = document.getElementById("barchart").getContext('2d');

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
                type: 'bar',
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
            <div className={`${styles.one}`}>
                <div className={`${styles.left}`}>
                    <h2 id={`${styles.textHead}`}>Food Donation Progress</h2>
                    <p id={`${styles.textContenet}`}>Join the movement! Every food donation
                        counts, bringing us one step closer to a
                        hunger-free community. Together, we can
                        make a difference in the lives of those in
                        need!</p>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.chart}`}>
                        <canvas id="barchart" className={`${styles.barchart}`}></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressOne;