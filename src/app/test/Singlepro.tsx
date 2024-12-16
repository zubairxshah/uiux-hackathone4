// import Shopnav from "./Shopnav";
import {
  ChevronRight,
  Facebook,
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  Star,
  X,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Singlepro() {
  return (
    <div className="max-w-7xl mx-auto">
      <div>{/* <Shopnav /> */}</div>
      <div className="">
        <p className="p-5 space-x-3">
          <span className="inline-block font-medium text-[#9F9F9F]">Home</span>
          <span className="inline-block">
            <ChevronRight className="inline-block" />
          </span>
          <span className="inline-block font-light text-[#9F9F9F]">Shop</span>
          <span>
            <ChevronRight className="inline-block" />
          </span>{" "}
          <span className="text-3xl text-[#9F9F9F]">|</span>{" "}
          <span>Asgaard sofa</span>
        </p>
      </div>
      <div className="grid grid-cols-3 ">
      <div className="flex flex-col">
      <div className=" justify-end">
          {/* Change path as per image folder */}

            <div>
              <Image
                src={"/test/outdoor.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/test/outdoor2.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/test/stuart.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/test/maya.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start -ml-[300px]">
        <div className="h-[500px] bg-[#FFF9E5] items-center flex">
          {/* Change path as per image folder */}
        <Image
            src={"/test/asgaard.png"}
            height={391}
            width={450}
            alt="image"
            className=""
          />
        </div>
        </div>
        <div className="-ml-[200px]">
          <div>
            <h1 className="text-4xl">Asgaard sofa</h1>
            <p className="text-2xl text-[#9F9F9F] mt-3">Rs. 250,000.00</p>
            <p className="flex mt-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span className="ml-4 text-xl text-[#9F9F9F]">|</span>
              <span className="ml-4 text-[#9F9F9F]">5 Customer Review</span>
            </p>
            <p className="mt-4 text-balance">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <h3 className="mt-4">Size</h3>
            <div className="flex items-center gap-7 mt-3 text-center">
              <h1 className="bg-[#FBEBB5] w-8 h-8 rounded-md ">L</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XL</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XS</h1>
            </div>
            <h3 className="mt-4">Color</h3>
            <div className="flex gap-7 mt-3">
              <h1 className="bg-[#816DFA] w-8 h-8 rounded-full "></h1>
              <h1 className="bg-[#000000] w-8 h-8 rounded-full"></h1>
              <h1 className="bg-[#CDBA7B] w-8 h-8 rounded-full"></h1>
            </div>
            <div className="flex gap-5 mt-6">
              <div className="w-28 h-16 border border-[#9F9F9F] rounded-lg flex justify-center items-center gap-7">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div className="">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="w-40 h-16 rounded-lg"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#9F9F9F] mt-10"></div>
          <div>
            <p className="mt-3">
              <span>SKU</span>
              <span>: SS001</span>
            </p>
            <p className="mt-3">
              <span>Category</span>
              <span>: Sofas</span>
            </p>
            <p className="mt-3">
              <span>Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </p>
            <div>
              <p className=" mt-3">
                <span>Share</span>
                <span>
                  : <FacebookIcon />
                </span>{" "}
                <span>
                  <LinkedinIcon />
                </span>
                <span>
                  {" "}
                  <XIcon />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
