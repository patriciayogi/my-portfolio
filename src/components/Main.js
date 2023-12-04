import React from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

export default function Main() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppWidget
        phoneNo="+17787984214"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={false}
        autoOpenTimer={4000}
        messageBox={true}
        headerTitle="Do you have any question?"
        headerCaption="Online"
        chatPersonName="Patricia Yogi"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        placeholder="Type a message.."
        btnTxt="Start Chat"
        btnTxtColor="black"
      />
    </div>
  );
}
