import Heading from "@/components/ui/heading";

export default function CategoriesStatistic() {
    return (
        <>
            <div className={'max-w-[360px]'}>
                <div className={'mb-[45px]'}>
                <Heading label={'Categories'}/>
                </div>
                <div className={'flex justify-between items-center border-b-[1px] border-primary/70'}>
                    <span className={'my-[10px]'}>Lifestyle</span>
                    <span className={'my-[10px]'}>09</span>
                </div>
                <div className={'flex justify-between border-b-[1px] border-primary/70'}>
                    <span className={'my-[10px]'}>Travel</span>
                    <span className={'my-[10px]'}>09</span>
                </div>
                <div className={'flex justify-between border-b-[1px] border-primary/70'}>
                    <span className={'my-[10px]'}>Technology</span>
                    <span className={'my-[10px]'}>09</span>
                </div>
            </div>
        </>
    )
}