import style from './manage.module.scss';
import useAbacusStore from '../../store/store';
import ManageColor from '../manageColor/manageColor';
import { ColorAbacus, ColorBone } from './dataManage';
import ManageNumber from '../manageNumber/manageNumber';


export default function Manage() {
    const { setColorBone, setColorAbacus, setUpBone, setDownBone, setColumnNumber, columnNumber, downBone, upBone } = useAbacusStore((state) => state)
    return (
        <div className={style.Manage}>
            <ManageColor colors={ColorBone} title={'Цвета косточек'} setColor={setColorBone} />
            <ManageColor colors={ColorAbacus} title={'Цвета абакуса'} setColor={setColorAbacus} />
            <ManageNumber title={'Кол-во косточек сверху'} number={upBone} setNumber={setUpBone} />
            <ManageNumber title={'Кол-во косточек снизу'} number={downBone} setNumber={setDownBone} />
            <ManageNumber title={'Длина абакуса'} number={columnNumber} setNumber={setColumnNumber} />
        </div>
    )
}