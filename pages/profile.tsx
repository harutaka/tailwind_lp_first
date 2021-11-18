import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Profile: NextPage = () => {
  const imgs = ["/img/bicycle1.jpg", "/img/bicycle2.jpg", "/img/bicycle3.jpg"]

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <header id="header" className="max-w-[960px] mx-auto py-0 px-[4%] text-center; flex justify-between items-center my-auto">
        <h1 className="w-[120px] leading-none px-0 py-2.5">
          <a href="index.html">
            <Image src="/img/logo.svg" alt="Profile" width={120} height={40} />
          </a>
        </h1>
        <nav>
          <ul className="flex px-2.5 py-0">
            <li className="ml-[30px]">
              <a href="#about" className="text-[#24292e] hover:opacity-70">
                About
              </a>
            </li>
            <li className="ml-[30px]">
              <a href="#bicycle" className="text-[#24292e] hover:opacity-70">
                Bicycle
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="mainvisual" className="mb-[80px]">
          <Image src="/img/mainvisual.jpg" alt="テキスト" width={1920} height={600} className="object-cover" />
        </div>
        <section id="about" className="max-w-[960px] mt-0 mx-auto mb-[100px] py-0 px-[4%] text-center;">
          <h2 className="inline-block text-[2rem] text-center mb-[60px] border-b-solid border-b border-[#383e45]">
            About
          </h2>
          <div className="flex justify-center items-center">
            <div className="mr-[30px]">
            <Image
              src="/img/about.jpg"
              className="rounded-[50%]"
              width={100}
              height={100}
              alt="テキストテキストテキスト"
            />
            </div>
            <div className="text-left">
              <h3 className="text-base my-2.5 mx-0">KAKERU MIYAICHI</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>
        <section id="bicycle" className="max-w-[960px] mt-0 mx-auto mb-[100px] py-0 px-[4%] text-center;">
          <h2 className="inline-block text-[2rem] text-center mb-[60px] border-b-solid border-b border-[#383e45]">Bicycle</h2>
          <ul>
            {imgs.map((item) => {
              return (
                <li className="w-[32%]" key={item}>
                  <Image src={item} alt="テキストテキストテキスト" width={640} height={424} />
                  <h3 className="content-title">タイトルタイトル</h3>
                  <p>テキストテキストテキスト</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <footer id="footer" className="text-[0.5rem] py-2.5 px-0 text-center">
        <p>&copy; 2020 Profile</p>
      </footer>
    </>
  )
}

export default Profile
