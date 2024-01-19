"use client";
import Projects from "@/components/pages/home/projects";
import { Button } from "@/components/ui/button";
import { fetchGitHubUserData, fetchGithubUserRepos } from "@/lib/api/github";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { CiYoutube } from "react-icons/ci";
export default function Home() {
  const age = new Date().getFullYear() - 2009;

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col gap-2">
        <div className="font-semibold text-xl">
          Hey, welcome to ProgsLife Portfolio
        </div>
        <div className="">
          I am a currently {age}. I am a full stack developer and content
          creator that uses Next JS, Typescript, Java, C#, Ruby, and much more.
          I create programming content for views as a part time side hustle also
          to help others.
        </div>
        <div className="w-full mt-4  flex flex-row  gap-5">
          <Link
            className="w-8 h-8"
            href={"https://www.youtube.com/channel/UCqgdQWNBL9j2j-bCN6NqBFw"}
            prefetch={true}
          >
            <YoutubeIcon className="w-full h-full" />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://www.youtube.com/channel/UCqgdQWNBL9j2j-bCN6NqBFw"}
            prefetch={true}
          >
            <DiscordLogoIcon className="w-full h-full" />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://www.youtube.com/channel/UCqgdQWNBL9j2j-bCN6NqBFw"}
            prefetch={true}
          >
            <GitHubLogoIcon className="w-full h-full" />
          </Link>
        </div>
        <Projects />
      </div>
    </div>
  );
}
