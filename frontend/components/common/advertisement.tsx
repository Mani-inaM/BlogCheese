import Button from "@/components/ui/button";


export default function Advertisement() {
  return(
   <div className={'w-[360px] bg-primary py-[50px]'}>
       <div className={'text-white flex flex-col gap-[20px] pl-[20px]'}>
            <h3 className={'max-w-[220px] font-bold text-[19px]'}>Want to travel sikkim by car?</h3>
           <p className={'max-w-[290px]'}>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
           <Button variant={'filledWhite'}>Visit Us</Button>
       </div>
   </div>
  )
};