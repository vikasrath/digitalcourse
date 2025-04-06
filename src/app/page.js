import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Card from '@/components/card';


function Page() {
  return (
    <>
      <div className="bg-[#0A2025]  text-white  h-screen ">
       
        <section className=" w-full bg-[#0A2025] py-9 px-8 ">
        <Card/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Page;





