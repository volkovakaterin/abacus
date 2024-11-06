import useAbacusStore from '../../store/store';
import Column from '../column/column';
import style from './abacus.module.scss';

export default function Abacus() {
    const { columnNumber } = useAbacusStore((state) => state)

    return (
        <div className={style.ColumnsContainer}>
            {Array.from({ length: columnNumber && typeof columnNumber == 'number' ? columnNumber : 1 }, (_, index) => (
                <Column key={index} />
            ))}
        </div>
    )
}