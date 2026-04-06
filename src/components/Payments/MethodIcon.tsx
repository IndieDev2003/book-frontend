import { useSetAtom } from "jotai"
import { paymentPopUp } from "../../jotai/atom"

type TPaymentMethod={
    src:string,alt:string,name:string,style?:string,
}

function MethodIcon({src,alt,name,style}:TPaymentMethod) {

  const setShow = useSetAtom(paymentPopUp)

  return (
    <button onClick={()=>setShow(true)}  className={`${!style?'':style} hover:border-orange-400 border-orange-200 bg-orange-100 flex rounded gap-1 items-center justify-center border px-4 min-w-34 h-20`}>
        <img src={src} alt={alt} className="size-12"/>
        <h3 className="text-xl">{name}</h3>
    </button>
  )
}

export default MethodIcon