import type { NextPage } from "next"
import Image from "next/image"
import Header from "../components/Header"

const Profile: NextPage = () => {
  const imgs = ["/img/bicycle1.jpg", "/img/bicycle2.jpg", "/img/bicycle3.jpg"]

  return (
    <>
      <Header />

      <main>
        <div id="mainvisual" className="mb-[80px]">
          <Image src="/img/mainvisual.jpg" alt="テキスト" width={1920} height={600} className="object-cover h-[600px]" priority={true} />
        </div>

        <section id="about" className="max-w-[960px] mt-0 mx-auto mb-[100px] py-0 px-[4%] text-center">
          <h2 className="inline-block text-[2rem] text-center mb-[60px] border-b-solid border-b border-[#383e45] font-bold">
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
              <h3 className="text-base my-2.5 mx-0 font-bold">KAKERU MIYAICHI</h3>
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

        <section id="bicycle" className="max-w-[960px] mt-0 mx-auto mb-[100px] py-0 px-[4%] text-center">
          <h2 className="inline-block text-[2rem] text-center mb-[60px] border-b-solid border-b border-[#383e45] font-bold">
            Bicycle
          </h2>
          <ul className="flex justify-between">
            {imgs.map((item) => {
              return (
                <li className="w-[32%]" key={item}>
                  <Image src={item} alt="テキストテキストテキスト" width={640} height={424} />
                  <h3 className="text-base my-2.5 mx-0 font-bold">タイトルタイトル</h3>
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
