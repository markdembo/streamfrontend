import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Video } from "../types/video";

type ApiResponse = {
  result: Video[];
};

const Home: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const callApi = async () => {
      const req = await fetch("https://backend.not-a-single-bug.workers.dev/");
      const json = (await req.json()) as ApiResponse;
      setVideos(json.result);
    };
    callApi();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to our Streaming Site!</h1>
        {videos.map((video) => (
          <a key={video.uid} href={`/play?uid=${video.uid}`} className="my-8">
            <img src={video.thumbnail} />
            <div className=" text-2xl">{video.meta.name}</div>
            <div className="text-xl">{video.creator}</div>
          </a>
        ))}
      </main>
    </div>
  );
};

export default Home;
