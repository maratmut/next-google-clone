import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  function search(e) {
    e.preventDefault()
    const term = searchInputRef.current.value
    if(!term.trim()) return
    router.push(`/search?term=${term.trim()}&searchType=`)
  }

  async function randomSearch(e) {
    e.preventDefault()
    const randomTerm = await fetch(`https://random-word-api.herokuapp.com/word?number=1`).then(res => res.json())
    if(!randomTerm) return
    router.push(`/search?term=${randomTerm}&searchType=`)
  }

  return (
    <>
      <Head>
        <title>Google clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Body*/}
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          height="100"
          src="https://free-png.ru/wp-content/uploads/2020/11/21-215328_-google-png-animated-logos-f94db687.png"
          alt="google"
        />
        <div className="flex items-center p-2 mt-5 hover:shadow-inner justify-between rounded-full w-full py-3 px-5 mx-auto max-w-[90%] sm:max-w-xl border border-gray-200">
          <SearchIcon className="h-5 text-gray-500 mr-2 " />
          <input ref={searchInputRef} className="w-[93%] outline-0 " type="text" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={randomSearch} className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/*Footer*/}
      <Footer />
    </>
  );
}
