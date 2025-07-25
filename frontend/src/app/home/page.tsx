"use client";
import BaseLayout from "@/components/BaseLayout";
import { useTranslation } from "react-i18next";
import { Namespace } from "@/i18n";
import { useState } from "react";
import {
  BotMessageSquare,
  DiscAlbum,
  MoveRight,
  PencilLine,
  Music,
  BarChart3,
  Brain,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import i18n from "@/lib/i18n";
import { useTodayDate } from "@/hooks/useTodayDate";
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";

const Home = () => {
  const { t } = useTranslation(Namespace.HOME);
  const [userName, setUserName] = useState("Leo");
  const today = useTodayDate(i18n.language);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const features = [
    {
      icon: <PencilLine className="w-8 h-8" />,
      text: t("startJournaling"),
      bg: "from-[#FEECDC] to-[#FDD2AA]",
    },
    {
      icon: <BotMessageSquare className="w-8 h-8" />,
      text: t("startChatting"),
      bg: "from-[#E0F2FE] to-[#C1E8FB]",
    },
    {
      icon: <Music className="w-8 h-8" />,
      text: t("turnOnMusic"),
      bg: "from-[#E0F7EC] to-[#C6F0DA]",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      text: t("emotionChart"),
      bg: "from-[#F3E8FF] to-[#E3D3FC]",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      text: t("meditate"),
      bg: "from-[#EDE9FE] to-[#D8D3FD]",
    },
  ];

  const moods = [
    { emoji: "😊", label: t("Happy") },
    { emoji: "😢", label: t("Sad") },
    { emoji: "😡", label: t("Angry") },
    { emoji: "😱", label: t("Anxious") },
    { emoji: "😴", label: t("Tired") },
    { emoji: "😌", label: t("Calm") },
    { emoji: "🤯", label: t("Stressed") },
    { emoji: "😍", label: t("Loved") },
  ];

  return (
    <>
      <BaseLayout>
        <div className="max-w-[1200px] mx-auto p-4">
          <div className="flex">
            {/* Greeting */}
            <div>
              <h2 className="text-5xl">
                {t("title.greet", { name: userName })}~
              </h2>
              <p>{t("title.ask")}</p>
            </div>
            {/* Operations */}
            <div className="md:flex items-center gap-4 ml-4 hidden">
              {/* Start Journaling */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="block rounded-full border p-2 cursor-pointer hover:scale-115 transition-transform"
                    aria-label={t("startJournaling")}
                  >
                    <PencilLine />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("startJournaling")}</p>
                </TooltipContent>
              </Tooltip>
              {/* Chat with Kyo */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="block rounded-full border p-2 cursor-pointer hover:scale-115 transition-transform"
                    aria-label={t("startChatting")}
                  >
                    <BotMessageSquare />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("startChatting")}</p>
                </TooltipContent>
              </Tooltip>
              {/* Relax with Music */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="block rounded-full border p-2 cursor-pointer hover:scale-115 transition-transform"
                    aria-label={t("turnOnMusic")}
                  >
                    <DiscAlbum />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("turnOnMusic")}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          {/* Summary Area */}
          <div className="border-y-1 py-2 my-4">
            <p className="text-2xl text-amber-600">{today}</p>
            <p>✨ {t("journaled")}</p>
            <div className="flex items-center">
              <p>🌈 {t("setCurrentMood")}</p>
              <MoveRight className="mx-1" />
              <Popover>
                <PopoverTrigger asChild>
                  <div className="cursor-pointer transition-transform text-xl">
                    {selectedMood || "😊"}
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-[220px] p-4 grid grid-cols-4 gap-3">
                  {moods.map((mood) => (
                    <Tooltip key={mood.emoji}>
                      <TooltipTrigger>
                        <button
                          onClick={() => setSelectedMood(mood.emoji)}
                          className={clsx(
                            "text-2xl rounded-full p-2 hover:bg-muted transition",
                            selectedMood === mood.emoji && "bg-muted"
                          )}
                        >
                          {mood.emoji}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{mood.label}</TooltipContent>
                    </Tooltip>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
            <p>🎵 {t("kyoSugestion")}</p>
          </div>
          {/* Emotion Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Your Mood Trends This Week</CardTitle>
            </CardHeader>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </Card>
          {/* Card Area */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 mt-4">
            {features.map((item, i) => (
              <button
                key={i}
                className={`cursor-pointer aspect-square md:aspect-[2/1] hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all bg-gradient-to-br ${item.bg} text-[#2e3a59] rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                aria-label={item.text}
              >
                <CardContent className="flex flex-col gap-3 items-center justify-center h-full px-4 py-6 text-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-full p-3 shadow-md">
                    {item.icon}
                  </div>
                  <p className="lg:text-xl font-medium">{item.text}</p>
                </CardContent>
              </button>
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Home;
