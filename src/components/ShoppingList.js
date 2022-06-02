import { plantList } from '../datas/plantList'

function ShoppingList() {
    const categories = [];
    plantList.forEach(function(acc, plant){
        // console.log(acc.category)
        if (!categories.includes(acc.category)) {
            categories.push(acc.category);
          }
    });
    // console.log(categories)
	return (
    <ul className='test'>
         {categories.map((categorie) => (
            <li key={categorie}>{categorie}</li>
        ))}
    </ul>
    )
}

export default ShoppingList