import style from './up.module.scss';
import useAbacusStore from '../../store/store';
import BonesContainer from '../bonesContainer/bonesContainer';
import { useEffect, useState } from 'react';
import { calculateHeight } from '../column/service';



export default function Up() {
    const { upBone, colorAbacus } = useAbacusStore((state) => state)

    const [height, setHeight] = useState(82);

    useEffect(() => {
        setHeight(calculateHeight(upBone))
    }, [upBone])

    return (
        <div className={`${style.Up} ${style[colorAbacus]}`}>
            <div className={`${style.rod} ${style[colorAbacus]}`} style={{ height: `${height}px` }}></div>
            <BonesContainer bones={typeof upBone == 'number' ? upBone : 0} />
        </div>
    )
}