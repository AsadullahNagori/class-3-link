import Link from "next/link"


export default function Header(){
    return 
        (<div>
            <ul className ="flex gap-11 bg-blue-900">
             
             <li><Link href="/">home</Link></li>
             <li><Link href="/about">about</Link></li>
             <li><Link href="/object">object</Link></li>
            </ul>
            
          </div> 
    );
}