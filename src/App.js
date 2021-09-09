import React from "react";
import { Card } from "./components/facebookCard/Card";
import { OnlinerCard } from "./components/onlinerCard/OnlinerCard";
import { JobsCard } from "./components/jobsCard/JobsCard";
import { VkCard } from "./components/vkCard/VkCard";
import "./App.css";

const cards = [
  {
    name: "Jason",
    surname: "Kincaid",
    education: "UCLA",
    post: "I have something insightful to say, as usual.",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
    date: "2 seconds ago",
  },
];

const onlinerCards = [
  {
    theme: "КОШЕЛЕК",
    comment: 239,
    description: "Что происходит с почтой, грузами и доставкой валюты",
  },
];

const jobsCards = [
  {
    title: "Junior React.js Engineer (Internship/React.js Lab)",
    company: "ООО АйтиРекс Групп ✔",
    city: "Минск",
    titleDescription:
      "Медицинское обслуживание. Онлайн-ивенты. Реферальная программа.",
    description:
      "10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Юазовые знания HTML...",
    date: "7 сентября",
  },
];

const vkCards = [
  {
    name: "Павел",
    surname: "Дуров",
    avatarUrl:
      "https://avatars.mds.yandex.net/get-zen_doc/1866101/pub_5da3924898930900b6454b75_5da3927df557d000ae05bd0d/scale_1200",
    post: "Иногда говорят, что Telegram был заблокирован в России, так как “закон есть закон”. Однако Telegram заблокирован в России как раз вопреки главному закону страны – Конституции. Решения судов и законы, противоречащие Конституции, не имеют силы. А это значит, что и сама блокировка Telegram незаконна.",
    date: "8 мая 2018",
    likeCount: 203293,
    commentCount: "Автор ограничил возможность комментирования",
  },
];

function App() {
  return (
    <div className="App">
      {cards.map((card) => {
        const { name, surname, date, post, avatarUrl, education } = card;

        return (
          <Card
            name={name}
            surname={surname}
            date={date}
            post={post}
            avatarUrl={avatarUrl}
            education={education}
          />
        );
      })}

      {onlinerCards.map((onlinerCard) => {
        const { theme, comment, description } = onlinerCard;

        return (
          <OnlinerCard
            theme={theme}
            comment={comment}
            description={description}
          />
        );
      })}

      {jobsCards.map((jobsCard) => {
        const { title, company, city, description, titleDescription, date } =
          jobsCard;

        return (
          <JobsCard
            title={title}
            company={company}
            city={city}
            titleDescription={titleDescription}
            description={description}
            date={date}
          />
        );
      })}

      {vkCards.map((vkCard) => {
        const {
          avatarUrl,
          name,
          surname,
          post,
          date,
          likeCount,
          commentCount,
        } = vkCard;

        return (
          <VkCard
            avatarUrl={avatarUrl}
            name={name}
            surname={surname}
            post={post}
            date={date}
            likeCount={likeCount}
            commentCount={commentCount}
          />
        );
      })}
    </div>
  );
}

export default App;
