// import { SelectedPage } from "@/Types/types";
// import React from "react";
import Logo from "@/assets/Logo.png";
import Ins from "@/assets/in2.png";
import Fb from "@/assets/fb.png";
import Git from "@/assets/github.png";

// type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-6">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>@ Duy hieern reserverd</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Contact us</p>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>0344701343</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="flex items-center gap-3 ">
            <a className="my-3 " href="https://www.instagram.com/_hien.ngd/">
              _hien.ngd
            </a>
            <img src={Ins} alt="" className="w-7 h-7" />
          </div>
          <div className="flex items-center gap-3 ">
            <a className="my-3 " href="https://www.facebook.com/felix482">
              felix482
            </a>
            <img src={Fb} alt="" className="w-7 h-7 ml-4" />
          </div>
          <div className="flex items-center gap-3 ">
            <a className="my-3 " href="https://github.com/hiennd482">
              hiennd482
            </a>
            <img src={Git} alt="" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
