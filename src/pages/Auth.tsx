import Button from "../components/Button";

function Auth() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="h-[350px] w-[450px] border rounded-lg bg-orange-100 border-orange-200 p-4">
        <div className="h-1/2">
          <h2 className="text-2xl">Login To Store</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quis quod quam fugit nisi suscipit eius? Illo non incidunt eos!</p>
          <p className="underline text-gray-700 cursor-pointer">Contact admin</p>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center h-1/2">
          <div className="flex h-10 w-full gap-1">
            <Button link="/" style="w-1/2" text="User Login" />
            <Button link="/" style="w-1/2" text="Vendor Login" />
          </div>
          <div className="flex w-full gap-1">
            <Button link="/" style="w-1/2 text-nowrap" text="User Register" />
            <Button link="/" style="w-1/2 text-nowrap" text="Vendor Register" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth