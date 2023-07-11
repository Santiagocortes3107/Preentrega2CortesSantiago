import {Item} from "../components/Item"

export const ItemList = ({products}) =>
 products.map(dep => <Item key={dep.id} dep={dep}/>)