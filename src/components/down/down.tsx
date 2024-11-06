import style from './down.module.scss';
import useAbacusStore from '../../store/store';
import BonesContainer from '../bonesContainer/bonesContainer';
import { useEffect, useState } from 'react';
import { calculateHeight } from '../column/service';

export default function Down() {
    const { downBone, colorAbacus } = useAbacusStore((state) => state)
    const [height, setHeight] = useState(193);

    useEffect(() => {
        setHeight(calculateHeight(downBone))
    }, [downBone])
    return (
        <div className={style.Down}>
            <div className={`${style.rod} ${style[colorAbacus]}`} style={{ height: `${height}px` }}></div>
            <BonesContainer bones={typeof downBone == 'number' ? downBone : 0} />
        </div>
    )
}