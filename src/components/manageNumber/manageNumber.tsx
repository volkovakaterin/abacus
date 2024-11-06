import NumberInput from '../numberInput/numberInput';
import style from './manageNumber.module.scss';

interface ManageNumber {
    title: string,
    number: number | string,
    setNumber: (value: number | string) => void,
}


export default function ManageNumber({ number, setNumber, title }: ManageNumber) {
    return (
        <div className={style.ManageNumber}>
            <span className={style.title}>{title}</span>
            <NumberInput number={number} setNumber={setNumber} />
        </div>
    )
}