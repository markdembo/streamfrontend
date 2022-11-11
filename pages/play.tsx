import { Stream } from "@cloudflare/stream-react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Video } from "../types/video";

const Home: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;

  if (!uid) return <></>;

  const id = uid as string;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="w-3/4">
          <Stream controls src={id} />
        </div>
      </main>
    </div>
  );
};

export default Home;
