import styles from './Energy.module.scss';
import { Area, ResponsiveContainer } from 'recharts';
import { CartesianGrid } from 'recharts';
import { ComposedChart } from 'recharts';
import { Line } from 'recharts';
import { XAxis } from 'recharts';


export default function Energy({ data }) {
    return (
        <ResponsiveContainer maxHeight={402}>
            <ComposedChart
                width={690}
                height={402}
                className={styles["wrapper-chart"]}
                data={data}
            >
                <XAxis dataKey="hour" />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="temperature" stroke="#c33c8c" strokeWidth={3} dot={true} />
                <Area type="monotone" dataKey="temperature" stroke="#c33c8c" fill="#e150a6" />
            </ComposedChart>
        </ResponsiveContainer>
    );
}
