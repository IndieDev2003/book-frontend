type TProduct={
  name?:string,
  price?: number,
  href?:string,
  image?:string,
  rating?:string,
  vendor?:string,
  shipping?:string

}
function ProductCard({name,vendor,price,shipping}:TProduct) {
  return (
  <div className="max-h-48 p-1 -65 flex-1 flex border">
    <div className="h-full w-46 border"></div>
    <div className="flex-1 border flex flex-col px-2 py-2 justify-between">
      <div className="">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-slate-800">Vendor: {vendor}</p>
        <p className="text-slate-800">Ships: {shipping}</p>
      </div>
      <div className="text- flex flex-col">
        
        <button className="px-8 py-2 bg-blue-400">Buy Now - ${price}</button>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;
