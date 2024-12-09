import { PiggyBank } from "lucide-react"
import Link from "next/link"


const Logo = () => {
  return (
      <Link href={'/'} className="flex items-center gap-x-2">
      <PiggyBank className="stroke stroke-[1.5] w-11 h-11 stroke-amber-500" />
      
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">Budget Buddy</p>
    </Link>
  )
}

export default Logo