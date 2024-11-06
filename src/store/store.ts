import { create } from 'zustand';
import { ColorAbacus, ColorBone } from '../components/manageContainer/dataManage';

interface AbacusStore {
   upBone: number | string;
   setUpBone: (upBone: number | string) => void;
   downBone: number | string;
   setDownBone: (downBone: number | string) => void;
   columnNumber: number | string;
   setColumnNumber: (columnNumber: number | string) => void;
   colorBone: string;
   setColorBone: (colorBone: string) => void;
   colorAbacus: string;
   setColorAbacus: (colorBone: string) => void;
}

const useAbacusStore = create<AbacusStore>((set) => ({
   upBone: 1,
   setUpBone: (upBone: number | string) => set({ upBone }),
   downBone: 4,
   setDownBone: (downBone: number | string) => set({ downBone }),
   columnNumber: 5,
   setColumnNumber: (columnNumber: number | string) => set({ columnNumber }),
   colorBone: ColorBone.BROWN,
   setColorBone: (colorBone: string) => set({ colorBone }),
   colorAbacus: ColorAbacus.BORDO,
   setColorAbacus: (colorAbacus: string) => set({ colorAbacus }),
}));

export default useAbacusStore;