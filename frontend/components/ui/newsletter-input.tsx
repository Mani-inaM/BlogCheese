import Button from "@/components/ui/button";


export default function NewsletterInput() {
    return (
        <>
            <div className={'mb-[40px]'}>
                <h6 className={'text-black mb-[20px]'}>Subscribe for newsletter</h6>
                <div className={'flex rounded-lg overflow-hidden'}>
                    <input className={'h-[45px]'} type="text" name="email" id="email"/>
                    <Button variant={'filledGreen'}>Subcribe</Button>
                </div>
            </div>
        </>
    )
}