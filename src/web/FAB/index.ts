import FabButton from './Button';
import FabItem from './Item';



type FabType = typeof FabButton & {
  Item: typeof FabItem,
};


const FAB: FabType = FabButton as FabType;
FAB.Item = FabItem;



export default FAB;
