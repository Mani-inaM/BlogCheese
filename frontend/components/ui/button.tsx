import {HTMLAttributeAnchorTarget} from "react";
import Link from 'next/link';

export interface IButtonProps {
    variant:
        | 'unstyled'
        | 'filledGreen'
        | 'filledWhite'
        | 'filledWhiteBorderGrey';
    className?: string;
    href?: string;
    children: React.ReactNode;
    height?: string;
    onClick?: () => void;
    target?: HTMLAttributeAnchorTarget;
}

export default function Button({
                                   variant,
                                   href,
                                   className,
                                   children,
                                   height = 'h-[45px]',
                                   onClick,
                                   target,
                               }: IButtonProps) {
    const getClass = () => {
        switch (variant) {
            case 'unstyled':
                return '';
            case 'filledGreen':
                return 'px-[40px] py-[15px] text-white bg-primary text-[15px] leading-[15px]';
            case 'filledWhite':
                return 'px-[25px] py-[15px] text-primary bg-white rounded-md text-[15px] leading-[15px]';
            case 'filledWhiteBorderGrey':
                return 'h-[30px] px-[10px] bg-white opacity-60 border-[1px] border-[#C4C4C4] rounded-md text-[15px]';
        }
    };

    return (
        <Link href={href || '/'} target={target} scroll={false}>
            <button
                onClick={onClick}
                style={{}}
                className={`${className} ${height}  ${getClass()} `}
            >
                {children}
            </button>
        </Link>
    );
}
