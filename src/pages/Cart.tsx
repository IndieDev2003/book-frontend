import Button from "../components/Button"

function Cart() {
  return (
    <div className="h-fit w-full p-4 realtive">
        <h2>Your Cart</h2>
        <div className="border-t my-2">
            <div className="flex justify-between items-center my-4 border-b pb-3 border-slate-400">
                <p>Game of Thornes - Chapter One</p>
                <div className="flex items-center gap-2">
                    <p className="mr-4 text-lg">45$</p>
                    <p className="px-2 border rounded-lg py-0.5">4</p>
                    <Button link="" style="!py-0 !px-2 text-md" text="X"/>
                </div>
            </div>
            
        </div>

        <Button link="/delivery" text="Proceed to Checkout" style="w-fit fixed bottom-10"/>
    </div>
  )
}

export default Cart