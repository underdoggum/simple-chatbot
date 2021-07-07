import React from "react"
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions"
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`So... whatddya want to know about?`,
    { widget: "learningOptions"}
  )],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "376B7E",
    },
  },

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: props => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JavaScript",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1
          },
          {
            text: "Mozilla JavaScript Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Front-End Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ]
      }
    },
  ],
}

export default config
