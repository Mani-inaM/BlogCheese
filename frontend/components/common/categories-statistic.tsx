import Heading from "@/components/ui/heading";

interface CategoriesStatisticProps{
    allPosts: number;
}

export default function CategoriesStatistic({allPosts}: CategoriesStatisticProps) {
    return (
        <>
            <div className={'max-w-[360px]'}>
                <div className={'mb-[45px]'}>
                <Heading label={'Categories'}/>
                </div>
                <div className={'flex justify-between items-center border-b-[1px] border-primary/70'}>
                    <span className={'my-[10px]'}>All posts</span>
                    <span className={'my-[10px]'}>{allPosts}</span>
                </div>
                {/*<div className={'flex justify-between border-b-[1px] border-primary/70'}>*/}
                {/*    <span className={'my-[10px]'}>Travel</span>*/}
                {/*    <span className={'my-[10px]'}>09</span>*/}
                {/*</div>*/}
                {/*<div className={'flex justify-between border-b-[1px] border-primary/70'}>*/}
                {/*    <span className={'my-[10px]'}>Technology</span>*/}
                {/*    <span className={'my-[10px]'}>09</span>*/}
                {/*</div>*/}
            </div>
        </>
    )
}