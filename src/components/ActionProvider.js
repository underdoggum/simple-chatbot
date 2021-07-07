class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Oh, hey there!");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Sweet! You should check out these for more info:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  }

  handleNonsense = () => {
    const message = this.createChatBotMessage(
      "What? ... Anyway check these out!",
      {
        widget: "learningOptions",
      }
    );

    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider
