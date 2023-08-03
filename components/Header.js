import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailOpened } from "react-icons/tb";
import { VscTriangleUp } from "react-icons/vsc";
import Image from "next/image";
const Header = () => {
  return (
    <div className="font-PTsans">
      <div className="flex items-center justify-between px-[6%] py-10">
        <div>
          <Image src="/logo.png" width={150} height={150} />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <SlLocationPin className="text-[50px] text-orange-500" />
          </div>
          <div>
            <h2 className="font-semibold text-[22px]">San Francisco</h2>
            <p className=" font-robotoc text-sm tracking-[1px] text-gray-500">
              Mountain View, Fake st., CA
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <FiPhoneCall className="text-[50px] text-orange-500" />
          </div>
          <div>
            <h2 className="font-semibold text-[22px]">San Francisco</h2>
            <p className=" font-robotoc text-sm tracking-[1px] text-gray-500">
              Mountain View, Fake st., CA
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <TbMailOpened className="text-[50px] text-orange-500" />
          </div>
          <div>
            <h2 className="font-semibold text-[22px]">San Francisco</h2>
            <p className=" font-robotoc font-light text-sm tracking-[1px] text-gray-500">
              Mountain View, Fake st., CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
