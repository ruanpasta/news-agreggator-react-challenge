import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./componesnts/Header";
import theme from "./theme";
import NoticeListLayout from "./componesnts/NoticeListLayout";
import { NoticeBase } from "./models/notice.types";

function App() {
  const exampleNotices: NoticeBase[] = [
    {
      source: "Yahoo Entertainment",
      author: "Sarah Fielding",
      title: "China claims to have already reached its 2030 clean energy goal",
      description:
        "In some good news for the environment, China has reached a clean energy goal six years sooner than expected. In 2020, President Xi Jinping set a goal to have at least 1,200 gigawatts of clean energy sources by 2030. In a new statement, China's National Energy…",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_659f4e22-927d-45e1-abbb-62f0e9b37f5a",
      urlToImage:
        "https://media.wired.com/photos/66c81511f4eb67b3df7aa79c/191:100/w_1280,c_limit/REI-Labor-Day-Sale-2024-Abstract-Background-SOURCE-REI.jpg",
      publishedAt: "2024-08-23T12:20:12Z",
    },
    {
      author: "Jane Smith",
      title: "Global Markets Rally Amid Economic Recovery",
      description:
        "Stock markets around the world have shown signs of recovery as economic indicators point to a potential rebound.",
      publishedAt: "2024-08-22T09:15:00Z",
      url: "https://example.com/news/markets-recovery",
      urlToImage:
        "https://media.wired.com/photos/66c81511f4eb67b3df7aa79c/191:100/w_1280,c_limit/REI-Labor-Day-Sale-2024-Abstract-Background-SOURCE-REI.jpg",
      source: "Financial Times",
    },
    {
      author: "Emily Johnson",
      title: "1 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
    {
      author: "Emily Johnson",
      title: "2 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
    {
      author: "Emily Johnson",
      title: "3 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
    {
      author: "Emily Johnson",
      title: "4 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
    {
      author: "Emily Johnson",
      title: "5 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
    {
      author: "Emily Johnson",
      title: "6 Exploring the Future of Space Travel",
      description:
        "With advancements in technology, space travel is becoming more feasible and accessible, opening up new possibilities for exploration.",
      publishedAt: "2024-08-21T16:45:00Z",
      url: "https://example.com/news/space-travel",
      urlToImage: "",
      source: "Space Today",
    },
  ];
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <NoticeListLayout notices={exampleNotices} />
      </ChakraProvider>
    </>
  );
}

export default App;
