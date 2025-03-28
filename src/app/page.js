import React from 'react';
import Image from 'next/image';
import Card from '@/components/card';
import Footer from '@/components/Footer';


function Page() {
  return (
    <>
      <div className="bg-black py-32 h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center rounded-full border border-zinc-600 px-2 py-[6px]">
            <div className="w-5 h-5 bg-zinc-900 rounded-full text-zinc-400 mr-2 p-[4px]">
            </div>
            <div className="text-zinc-400 text-sm">
              Supercharge Your YouTube Growth 
            </div>
          </div>
          <div className="relative text-center mt-5 mb-12 text-5xl font-medium">
            <h1 className="relative text-white pb-3 leading-[65px] z-10 isolate">
              Get Viral on YouTube with Our <br />Proven Course
            </h1>
            <div className="absolute left-1/2 bottom-12 -translate-x-1/2 h-12 w-96 bg-blue-800 blur-[50px] z-[1] opacity-60"></div>
          </div>
          <div className="text-center mb-20">
            <p className='w-[60%]  mx-auto'>Are you struggling to get more views, subscribers, and engagement on your YouTube Shorts? Our exclusive Viral Shorts Bundle is designed to help you skyrocket your channel in no time!</p>
          </div>
        </div>
        <section className=" w-full bg-white dark:bg-[#0A2025] py-9 px-8 ">
          <div className="mx-auto max-w-[1160px] ">
            <header className="h-12 mb-8 justify-between items-center flex">
              <h2 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">Shop by Sport</h2>
              <div className="flex gap-4"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5ZM20 36.5C16.7366 36.5 13.5465 35.5323 10.8331 33.7192C8.11969 31.9062 6.00484 29.3293 4.756 26.3143C3.50715 23.2993 3.1804 19.9817 3.81705 16.781C4.45371 13.5803 6.02518 10.6403 8.33275 8.33274C10.6403 6.02517 13.5803 4.4537 16.781 3.81704C19.9817 3.18039 23.2993 3.50714 26.3143 4.75599C29.3293 6.00483 31.9062 8.11968 33.7193 10.8331C35.5323 13.5465 36.5 16.7366 36.5 20C36.495 24.3745 34.7551 28.5685 31.6618 31.6618C28.5685 34.7551 24.3746 36.495 20 36.5ZM29 20C29 20.3978 28.842 20.7794 28.5607 21.0607C28.2794 21.342 27.8978 21.5 27.5 21.5H16.1206L19.5613 24.9387C19.7006 25.0781 19.8112 25.2436 19.8866 25.4257C19.962 25.6077 20.0008 25.8029 20.0008 26C20.0008 26.1971 19.962 26.3923 19.8866 26.5743C19.8112 26.7564 19.7006 26.9219 19.5613 27.0613C19.4219 27.2006 19.2564 27.3112 19.0744 27.3866C18.8923 27.462 18.6971 27.5008 18.5 27.5008C18.3029 27.5008 18.1078 27.462 17.9257 27.3866C17.7436 27.3112 17.5781 27.2006 17.4388 27.0613L11.4388 21.0613C11.2993 20.9219 11.1887 20.7565 11.1132 20.5744C11.0377 20.3923 10.9988 20.1971 10.9988 20C10.9988 19.8029 11.0377 19.6077 11.1132 19.4256C11.1887 19.2435 11.2993 19.0781 11.4388 18.9387L17.4388 12.9387C17.7202 12.6573 18.102 12.4992 18.5 12.4992C18.8981 12.4992 19.2798 12.6573 19.5613 12.9387C19.8427 13.2202 20.0008 13.602 20.0008 14C20.0008 14.398 19.8427 14.7798 19.5613 15.0613L16.1206 18.5H27.5C27.8978 18.5 28.2794 18.658 28.5607 18.9393C28.842 19.2206 29 19.6022 29 20Z"
                  fill="#449596" fillOpacity="0.5"></path>
              </svg><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5ZM20 36.5C16.7366 36.5 13.5465 35.5323 10.8331 33.7192C8.11969 31.9062 6.00484 29.3293 4.756 26.3143C3.50715 23.2993 3.1804 19.9817 3.81705 16.781C4.45371 13.5803 6.02518 10.6403 8.33275 8.33274C10.6403 6.02517 13.5803 4.4537 16.781 3.81704C19.9817 3.18039 23.2993 3.50714 26.3143 4.75599C29.3293 6.00483 31.9062 8.11968 33.7193 10.8331C35.5323 13.5465 36.5 16.7366 36.5 20C36.495 24.3745 34.7551 28.5685 31.6618 31.6618C28.5685 34.7551 24.3746 36.495 20 36.5ZM28.5613 18.9387C28.7007 19.0781 28.8114 19.2435 28.8868 19.4256C28.9623 19.6077 29.0012 19.8029 29.0012 20C29.0012 20.1971 28.9623 20.3923 28.8868 20.5744C28.8114 20.7565 28.7007 20.9219 28.5613 21.0613L22.5613 27.0613C22.2798 27.3427 21.8981 27.5008 21.5 27.5008C21.102 27.5008 20.7202 27.3427 20.4388 27.0613C20.1573 26.7798 19.9992 26.398 19.9992 26C19.9992 25.602 20.1573 25.2202 20.4388 24.9387L23.8794 21.5H12.5C12.1022 21.5 11.7207 21.342 11.4393 21.0607C11.158 20.7794 11 20.3978 11 20C11 19.6022 11.158 19.2206 11.4393 18.9393C11.7207 18.658 12.1022 18.5 12.5 18.5H23.8794L20.4388 15.0613C20.1573 14.7798 19.9992 14.398 19.9992 14C19.9992 13.602 20.1573 13.2202 20.4388 12.9387C20.7202 12.6573 21.102 12.4992 21.5 12.4992C21.8981 12.4992 22.2798 12.6573 22.5613 12.9387L28.5613 18.9387Z"
                    fill="#3E9D26"></path>
                </svg></div>
            </header>
            <main className="flex items-center flex-col md:flex-row  flex-wrap justify-center  gap-10">
              <Card
                image="/CourseBundlle/img1.jpg"
                title="AI Reels"
                des="Boost your YouTube reach with AI-powered reels! Get high-engagement short videos designed to go viral effortlessly."
              />
              <Card
                image="/CourseBundlle/img2.jpg"
                title="Bageshwar Baba"
                des="Trending Bageshwar Baba clips that guarantee massive views! Use these shorts to attract an engaged audience fast."
              />
              <Card
                image="/CourseBundlle/img3.jpg"
                title="Hindi Podcast"
                des="Dominate the podcast niche with viral Hindi shorts! Grab attention, gain subscribers, and grow your influence quickly."
              />
              <Card
                image="/CourseBundlle/img4.jpg"
                title="HD Movies"
                des="Make your channel explode with high-quality, viral movie clips! Perfect for gaining millions of views effortlessly."
              />
              <Card
                image="/CourseBundlle/img5.jpg"
                title="Viral Movies"
                des="Get trending movie shorts that attract crazy engagement! These clips will keep your audience hooked and coming back for more."
              />
              <Card
                image="/CourseBundlle/img6.jpg"
                title="Space Reels"
                des="Tap into the viral space niche! Get mesmerizing space clips that captivate viewers and make your channel skyrocket."
              />
            </main>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Page;





