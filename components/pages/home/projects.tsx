"use client";
import { ExternalLink, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { fetchGithubUserRepos } from "@/lib/api/github";
import * as React from "react";

export default function Projects() {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchGithubUserRepos().then((data) => {
      setData(data);
    });
  });

  return (
    <div
      className="flex flex-col w-full my-8
    "
    >
      <div className="w-full   grid grid-cols-2 gap-4">
        {data.map((data) => {
          return (
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex justify-between">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.clone_url}
                  >
                    <CardTitle className="text-base hover:underline">
                      {data.name}
                    </CardTitle>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.clone_url}
                    aria-label="Visit the project's live url/repo"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>
                <CardDescription className="line-clamp-2 text-sm font-light">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Badge></Badge>
                <CardDescription className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                </CardDescription>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
