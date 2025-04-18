"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function FeatureSection() {
   return (
      <div className="h-[40rem] w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-black dark:to-zinc-900">
         <PinContainer title="MemoTag">
            <div
               className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
               
               <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 p-4 justify-center items-center">
                  <img src="/images/3dwatch.png" alt="watch-img" className="max-w-full h-auto" />
               </div>

            </div>
         </PinContainer>
      </div>
   );
}
