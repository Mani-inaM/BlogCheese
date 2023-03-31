import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";


export default function SearchTags(){
    return(
        <>
            <div className={'mb-[30px]'}>
            <Heading label={'Search with tags'}/>
            </div>
            <div className={'flex flex-col gap-[10px]'}>
                <div className={'flex gap-[7px]'}>
                    <Button variant={'filledWhiteBorderGrey'}>Travel</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Lifestyle</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Fashion</Button>
                </div>
                <div className={'flex gap-[7px]'}>
                    <Button variant={'filledWhiteBorderGrey'}>Technology</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Business</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Design</Button>
                </div>
                <div className={'flex gap-[7px]'}>
                    <Button variant={'filledWhiteBorderGrey'}>Health</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Food</Button>
                    <Button variant={'filledWhiteBorderGrey'}>Art</Button>
                </div>
            </div>
        </>
    )
}