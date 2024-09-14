import { useState } from "react";

export default function Home() {

  const [searchTerm, setSearchTerm ] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const products = PRODUCTS.filter( (product) =>{
    if (isChecked && product.stocked == false){
      return false;
    }
    if (searchTerm != ''){
      return product.name.toUpperCase().includes(searchTerm.toUpperCase());
    }
    return true;

  });



  return (
    <>
    <h1>Home</h1>
    <SearchBar searchTerm={searchTerm} isChecked={isChecked} onSearchTermChange={setSearchTerm} onIsCheckedChange={setIsChecked}/>
    <ProductTable products={products}/>
    </>
    
  );
}

export function SearchBar({searchTerm, isChecked, onSearchTermChange, onIsCheckedChange}){
  return ( 
  <form>
    <input type='text' placeholder="...Search" value={searchTerm} onChange={(e) => onSearchTermChange(e.target.value)}/>
    <label>
      <input type="checkbox" value={isChecked} onChange={(e)=> onIsCheckedChange(e.target.checked)}/>
      {' '}
      Only show products in stock
    </label>
  </form>
  )
}

export function ProductTable({products}){
  let categoryMap = new Map();

  products.forEach( product => {
    if (categoryMap.has(product.category)){
      let productList = categoryMap.get(product.category);
      productList.push(product);
      categoryMap.set(product.category, productList)
    } else {
      categoryMap.set(product.category, [product]);
    }
  });


  const categoryList = Array.from( categoryMap ).map( ([category, products]) => ({category, products}));


  const ProductCategories = categoryList.map( (category) =>{
    return <ProductCategory category={category.category} key={category.category} products={category.products}/>
  });

  return (
    <table>
      <tbody>
        <tr>
        <th>Name</th><th>Price</th>
      </tr>
      {ProductCategories}
      </tbody>      
    </table>
  )
}

export function ProductCategory({category, products}){

  const productList = products.map (product => <ProductLines product={product} key={product.name} />);

  return (
    <>
    <tr><th colSpan='2'>{category}</th></tr>
    {productList}
    </>
  );
}

export function ProductLines({product}){
  return (
    <tr><td class={product.stocked?'':'out-of-stock'}>{product.name}</td><td>{product.price}</td></tr>
  )
}


export const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
