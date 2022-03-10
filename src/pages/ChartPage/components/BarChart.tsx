// todo useRef + chartjs

import { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';

// const canvas = document.createElement('canvas') // canvasRef.current
// const ctx = canvas.getContext('2d');



 
export const BarChart = () => {
    const elementRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvasElement = elementRef.current!;
        console.log(canvasElement); // logs <div>I'm an element</div>
        const ctx = canvasElement.getContext('2d');
        console.log(ctx);
        const myChart = new Chart(ctx!, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        console.log(myChart);

    }, []);
    
    

    return (
      <div>
        <canvas ref={elementRef} id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }

  export default BarChart;