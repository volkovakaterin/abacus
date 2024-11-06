
import useAbacusStore from '../../store/store';
import Down from '../down/down';
import Up from '../up/up';
import style from './column.module.scss';

export default function Column() {
    const { colorAbacus } = useAbacusStore((state) => state)
    return (
        <div className={`${style.Column} ${style[colorAbacus]}`}>
            <Up />
            <Down />
        </div>
    )
}