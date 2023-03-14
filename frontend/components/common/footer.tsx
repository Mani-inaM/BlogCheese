import NewsletterInput from "@/components/ui/newsletter-input";
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import Logo from "@/components/icons/logo";
export default function Footer() {
  return (
    <div className={"bg-primary/30"}>
      <div
        className={
          "container flex justify-between pt-[100px] pb-[80px]"
        }
      >
        <div className={"flex flex-col gap-[25px]"}>
          <Logo />
          <p className={"max-w-[230px] opacity-50"}>
            Did you come here for something in particular or just general Riker
          </p>
        </div>
        <div className={"flex flex-col gap-[15px]"}>
          <h6 className={"mb-[10px]"}>Blogs</h6>
          <span className={"opacity-50"}>Travel</span>
          <span className={"opacity-50"}>Technology</span>
          <span className={"opacity-50"}>Lifestyle</span>
          <span className={"opacity-50"}>Business</span>
        </div>
        <div className={"flex flex-col gap-[15px]"}>
          <h6 className={"mb-[10px]"}>Quick links</h6>
          <span className={"opacity-50"}>FAQ</span>
          <span className={"opacity-50"}>Terms & conditions</span>
          <span className={"opacity-50"}>Lifestyle</span>
        </div>
        <div>
          <NewsletterInput />
          <h6 className={"mb-[20px]"}>Follow on:</h6>
          <div className={"flex gap-[10px]"}>
            <AiOutlineFacebook />
            <AiFillTwitterSquare />
            <FaPinterestSquare />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"h-[1px] bg-primary/70"}></div>
        <p className={"py-[30px] text-center text-[12px] opacity-50"}>
          Designed By Themefisher & Developed By Gethugothemes
        </p>
      </div>
    </div>
  );
}
