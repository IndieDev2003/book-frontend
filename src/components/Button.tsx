import { Link } from "react-router-dom"

type TButton={
    text?:string,
    style?:string,
    link:string,

}
export default function Button({text,style,link}:TButton) {
  return (
    <Link to={link} className={`${style} text-lg px-10 cursor-pointer py-1.5 border rounded-lg bg-orange-300 border-orange-400 hover:bg-orange-500 text-white`}>{text}</Link>
  )
}
