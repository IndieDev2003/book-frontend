type TPaymentMethod={
    src:string,alt:string,name:string,
}

function MethodIcon({src,alt,name}:TPaymentMethod) {
  return (
    <div className="hover:border-orange-400 border-orange-200 bg-orange-100 flex rounded gap-1 items-center justify-center border px-4 min-w-34 h-20">
        <img src={src} alt={alt} className="size-12"/>
        <h3 className="text-xl">{name}</h3>
    </div>
  )
}

export default MethodIcon