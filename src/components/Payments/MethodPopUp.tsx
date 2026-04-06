// import { bitcoin_icon } from "../../assets/assets";

// type TMethodPopUp={
//     currency_icon?:string,currency_address:string
// }

// export default function MethodPopUp({currency_icon,currency_address}:TMethodPopUp) {
//   return (
//     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white -translate-y-1/2 border h-[400px] w-[250px] rounded p-3">
//       <div className="h-full w-full flex gap-1 flex-col items-center justify-center px-1">
//         <img src={!currency_icon?bitcoin_icon:currency_icon} alt="bitcoin" className="size-24" />
//         <p>Network: TRC-20</p>
//         <p>Amount: 45$</p>
//         <p className="text-left w-full">Address :</p>
//         <div className="w-[215px]">
//           <p className="overflow-x-scroll px-1 py-1 border  border-orange-200 bg-orange-100 rounded">
//             {!currency_address?'TQ9hYy7Y8wX1pK2mL8ZsF4nJ6cR3vB1uAa':currency_address}
//           </p>
//           <input
//             type="text"
//             className="w-full overflow-x-scroll px-1 py-1 border mt-1 border-orange-200 bg-orange-100 rounded"
//             required
//             placeholder="Transaction ID"
//           />
//         </div>

//         <button className="px-8 py-2 border w-full rounded hover:border-orange-400 border-orange-200 bg-orange-100">
//           Payment Done
//         </button>
//         <button className="px-8 py-2.5 border w-full rounded mt- bg-black text-white">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { bitcoin_icon } from "../../assets/assets";
import { useAtomValue, useSetAtom } from "jotai";
import {  paymentPopUp } from "../../jotai/atom";

type TMethodPopUp = {
  currency_icon?: string;
  currency_address?: string;
  active?:boolean,
  
};

export default function MethodPopUp({
  currency_icon,
  currency_address,
  
}: TMethodPopUp) {
  const [copied, setCopied] = useState(false);

  const show = useAtomValue(paymentPopUp)
  // const popUpValue = useAtomValue(paymentMethodPopUp)
  const setShow = useSetAtom(paymentPopUp)

  const address = currency_address || "TQ9hYy7Y8wX1pK2mL8ZsF4nJ6cR3vB1uAa";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className={`${show?'fixed':'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border h-[450px] w-[250px] rounded p-3`}>
      <div className="h-full w-full flex gap-2 flex-col items-center justify-center px-1">
        <img
          src={currency_icon || bitcoin_icon}
          alt="crypto"
          className="size-24"
        />

        <p>Network: TRC-20</p>
        <p>Amount: $45</p>

        <p className="text-left w-full">Address :</p>

        <div className="w-full">
          <div
            onClick={handleCopy}
            className="overflow-x-auto px-2 py-2 border border-orange-200 bg-orange-100 rounded cursor-pointer text-sm flex justify-between items-center"
          >
            <span className="truncate">{address}</span>
            <span className="ml-2 text-xs">{copied ? "✅" : "📋"}</span>
          </div>

          <input
            type="text"
            className="w-full px-2 py-2 border mt-2 border-orange-200 bg-orange-100 rounded"
            required
            placeholder="Transaction ID"
          />
        </div>

        <button className="px-8 py-2 w-full rounded border hover:border-orange-400 border-orange-200 bg-orange-100">
          Payment Done
        </button>

        <button onClick={()=>setShow(false)} className="px-8 py-2.5 w-full rounded bg-black text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}
