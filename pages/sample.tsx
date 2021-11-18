import type { NextPage } from "next"

const Sample: NextPage = () => {
const w_set = {
  250: "w-[250px]",
  110: "w-[110px]"
}
const h_set = {
  250: "h-[250px]",
  110: "h-[110px]"
}
const wsize = 250
const hsize = 250

  return (
    <div className={`${w_set[wsize]} ${h_set[hsize]} rounded-[50%] bg-blue-600`}></div>
  )
}

export default Sample
