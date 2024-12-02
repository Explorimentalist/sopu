'use client'

import * as React from "react"
import Link from "next/link"
import { CartSidebarComponent } from "@/components/cart-sidebar"
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  Menubar,
} from "@/components/ui/menubar"
import { useCurrency } from "@/context/currency-context"

export default function Nav() {
  const [language, setLanguage] = React.useState("EN")
  const { currency, setCurrency } = useCurrency()

  return (
    <div className="w-full px-4 py-6">
      <header className="mx-auto max-w-2xl">
        <nav className="relative flex h-16 items-center justify-between rounded-full bg-white px-8 shadow-[0_4px_8px_rgb(0,0,0,0.12)]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.5501 15.5673H43.9724V13.8745L41.8956 15.6022C41.6512 15.6953 41.3138 15.7418 40.8833 15.7418C40.0573 15.7418 39.3999 15.5033 38.9112 15.0263C38.4226 14.5376 38.1782 13.8803 38.1782 13.0542V9.05766L36.625 8.15015V7.43461L39.7838 5.95117H40.6215V12.0071C40.6215 12.6237 40.7146 13.0542 40.9008 13.2985C41.0869 13.5312 41.4127 13.6476 41.8781 13.6476C42.2039 13.6476 42.5297 13.5894 42.8554 13.4731C43.1812 13.3567 43.5535 13.1356 43.9724 12.8099V9.05766L42.4191 8.15015V7.43461L45.578 5.95117H46.4157V14.1188L47.9864 14.6947L47.5501 15.5673Z" fill="black"/>
              <path d="M29.81 15.7416C29.2399 15.7416 28.7222 15.5787 28.2568 15.2529V18.4118L30.7874 19.1273L30.3511 19.9999H24.2603V19.2844L25.8135 18.0453V9.05741L24.2603 8.11499V7.39945L27.5064 5.91602L28.1172 8.08009L30.4907 6.2127C30.863 6.11962 31.2877 6.07308 31.7647 6.07308C32.4279 6.07308 33.0212 6.27669 33.5448 6.68391C34.08 7.07949 34.4989 7.62051 34.8014 8.30696C35.1039 8.99342 35.2551 9.75549 35.2551 10.5932C35.2551 11.5007 34.9701 12.35 34.4 13.1412C33.8415 13.9324 33.1376 14.5665 32.2883 15.0435C31.4389 15.5089 30.6187 15.7416 29.8275 15.7416H29.81ZM30.7874 8.02773C30.3569 8.02773 29.9438 8.10335 29.5483 8.25461C29.1643 8.39422 28.728 8.66182 28.2394 9.05741V11.937C28.2394 12.542 28.4604 13.0481 28.9025 13.4554C29.3563 13.8509 29.9962 14.0487 30.8223 14.0487C32.0207 14.0487 32.6198 13.1761 32.6198 11.4309C32.6198 10.4652 32.4628 9.6566 32.1486 9.00505C31.8345 8.3535 31.3807 8.02773 30.7874 8.02773Z" fill="black"/>
              <path d="M18.0712 6.07335C18.874 6.07335 19.5953 6.27696 20.2352 6.68418C20.8752 7.07976 21.3696 7.62078 21.7187 8.30723C22.0794 8.99369 22.2597 9.75576 22.2597 10.5935C22.2597 11.501 21.9746 12.3503 21.4045 13.1415C20.8461 13.9326 20.1422 14.5667 19.2928 15.0438C18.4435 15.5092 17.6232 15.7419 16.8321 15.7419C16.0293 15.7419 15.3079 15.5441 14.668 15.1485C14.0397 14.7413 13.5453 14.1944 13.1846 13.508C12.8239 12.8099 12.6436 12.042 12.6436 11.2043C12.6436 10.2968 12.9228 9.45326 13.4813 8.67373C14.0514 7.88256 14.7611 7.25429 15.6104 6.78889C16.4598 6.31187 17.28 6.07335 18.0712 6.07335ZM17.059 7.74876C16.4772 7.74876 16.0351 7.96982 15.7326 8.41195C15.4417 8.85407 15.2963 9.50561 15.2963 10.3666C15.2963 11.4254 15.5173 12.3038 15.9595 13.0019C16.4016 13.7 17.0299 14.049 17.8443 14.049C19.0311 14.049 19.6244 13.1706 19.6244 11.4137C19.6244 10.3666 19.4034 9.49398 18.9612 8.79589C18.5191 8.09781 17.885 7.74876 17.059 7.74876ZM21.1777 0.924965L17.059 3.82202L16.2387 3.42062L18.1061 0L20.7937 0.331591L21.1777 0.924965Z" fill="black"/>
              <path d="M7.78816 12.5647C7.78816 12.204 7.64272 11.8666 7.35185 11.5525C7.07262 11.2383 6.72357 10.9533 6.30472 10.6973C5.88587 10.4297 5.30413 10.0981 4.5595 9.70252C3.6869 9.23713 2.98299 8.83573 2.44779 8.49832C1.91259 8.14928 1.45302 7.74788 1.06907 7.29412C0.696757 6.82873 0.510601 6.3168 0.510601 5.75833C0.510601 5.17659 0.760749 4.55413 1.26104 3.89095C1.77297 3.21613 2.39543 2.65184 3.12843 2.19809C3.86142 1.7327 4.53623 1.5 5.15288 1.5C5.8975 1.5 6.7643 1.58726 7.75325 1.76178C8.75384 1.93631 9.48102 2.12246 9.93477 2.32025V5.8805H8.88764C8.35244 4.93808 7.75907 4.20509 7.10752 3.68152C6.46761 3.15796 5.79279 2.89617 5.08307 2.89617C4.4897 2.89617 4.0243 3.08233 3.6869 3.45464C3.34949 3.81532 3.18078 4.28653 3.18078 4.86827C3.18078 5.25222 3.32622 5.6129 3.61709 5.9503C3.90796 6.27608 4.26863 6.57277 4.69912 6.84037C5.14124 7.10797 5.73462 7.43374 6.47924 7.81769C7.32858 8.25981 8.02085 8.64957 8.55605 8.98698C9.09125 9.32439 9.53919 9.71997 9.89987 10.1737C10.2722 10.6275 10.4583 11.1278 10.4583 11.6746C10.4583 12.2564 10.1849 12.8846 9.63809 13.5595C9.10289 14.2226 8.44552 14.7869 7.66599 15.2523C6.88646 15.7061 6.17674 15.9329 5.53683 15.9329C4.7573 15.9329 3.82651 15.8457 2.74448 15.6712C1.67408 15.4966 0.900366 15.3105 0.42334 15.1127V11.5525H1.48792C2.04639 12.4949 2.6863 13.2279 3.40766 13.7514C4.12902 14.275 4.86783 14.5368 5.62409 14.5368C6.27563 14.5368 6.7992 14.3448 7.19478 13.9609C7.59036 13.5653 7.78816 13.0999 7.78816 12.5647Z" fill="black"/>
            </svg>
          </Link>

          <div className="flex items-center gap-4 font-sans">
            {/* About */}
            <Link
              href="/about"
              className="text-base font-medium text-gray-900 transition-colors hover:text-gray-600"
            >
              About
            </Link>



            {/* Language Selector */}
            {/* <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer font-medium data-[state=open]:bg-gray-100">
                  {language}
                </MenubarTrigger>
                <MenubarContent align="end" className="min-w-[140px] font-sans bg-white">
                  <MenubarItem
                    className="cursor-pointer"
                    onSelect={() => setLanguage("EN")}
                  >
                    English (UK)
                  </MenubarItem>
                  <MenubarItem
                    className="cursor-pointer"
                    onSelect={() => setLanguage("ES")}
                  >
                    Español (ES)
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar> */}

            {/* Add Currency Selector */}
            {/* <Menubar className="border-none bg-transparent ml-2">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer font-medium data-[state=open]:bg-gray-100">
                  {currency}
                </MenubarTrigger>
                <MenubarContent align="end" className="min-w-[140px] font-sans bg-white">
                  <MenubarItem
                    className="cursor-pointer"
                    onSelect={() => setCurrency("GBP")}
                  >
                    British Pound (£)
                  </MenubarItem>
                  <MenubarItem
                    className="cursor-pointer"
                    onSelect={() => setCurrency("EUR")}
                  >
                    Euro (€)
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar> */}

           {/* Cart */}
            <CartSidebarComponent />
            
          </div>
        </nav>
      </header>
    </div>
  )
}