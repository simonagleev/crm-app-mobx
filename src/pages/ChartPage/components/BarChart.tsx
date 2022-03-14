// todo useRef + chartjs

import { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';

export const BarChart = ({
    height = 100,
    width = 100,
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const rootElement = rootRef.current!;
        if (rootElement.childNodes.length) {
            rootElement.removeChild(rootElement.lastChild!);
        }
        const canvasElement = document.createElement('canvas');
        canvasElement.height = height;
        canvasElement.width = width;
        rootElement.appendChild(canvasElement)       
        const ctx = canvasElement.getContext('2d');
        const myChart = new Chart(ctx!, {
            type: 'doughnut',
            data: {
                
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 30, 5, 2, 3],
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

        return () => { myChart.clear() };

    }, [height, width]); // Сюда передать пропс, в зависимости от изменения которого будет обновляться useEffect
    
    
    

    return (
        <div ref={rootRef}></div>         
    )
}

  export default BarChart;

