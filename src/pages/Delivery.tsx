
import Button from "../components/Button";

function Delivery() {
  return (
    <div className="h-full w-full p-4">
      <form action="">
        <h2 className="text-xl">Delivery Information</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Your Name</label>
          <input required type="text" placeholder="" name="name" />
          <div className="flex gap-2">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="street">Street</label>
              <input required type="text" name="street" />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="city">City</label>
              <input required type="text" name="city" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex w-1/2 flex-col">
                <label htmlFor="zipcode">Zipcode</label>
                <input required type="number" name="zipcode" id="" />
            </div>
            <div className="flex w-1/2 flex-col">
                <label htmlFor="state">State</label>
                <input required type="text" name="state" id="" />
            </div>
          </div>
          <div className="flex-col flex">
            <label htmlFor="country">Country</label>
            <input required type="text" name="country" />
          </div>
          <div className="flex-col flex">
            <label htmlFor="phone">Phone</label>
            <input required type="number" name="phone" />
          </div>
          <Button link={'/payment'} style="!text-center" text="Proceed Payment"/>
        </div>
      </form>
    </div>
  );
}

export default Delivery;
