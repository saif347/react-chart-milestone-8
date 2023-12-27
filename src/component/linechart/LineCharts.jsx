import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const LineCharts = () => {
    const student = [
        {"id": 1, "name": "Alice", "math": 75, "physics": 80},
        {"id": 2, "name": "Bob", "math": 85, "physics": 78},
        {"id": 3, "name": "Charlie", "math": 90, "physics": 92},
        {"id": 4, "name": "David", "math": 70, "physics": 65},
        {"id": 5, "name": "Eva", "math": 60, "physics": 75},
        {"id": 6, "name": "Frank", "math": 78, "physics": 88},
        {"id": 7, "name": "Grace", "math": 92, "physics": 95},
        {"id": 8, "name": "Henry", "math": 84, "physics": 82},
        {"id": 9, "name": "Ivy", "math": 77, "physics": 79},
        {"id": 10, "name":"Jack", "math": 88, "physics": 90}
      ]
      
    return (
        <div>
            <LineChart width={800} height={400} data={student}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='blue'></Line>

            </LineChart>
            
        </div>
    );
};

export default LineCharts;