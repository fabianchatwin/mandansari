  import Head from "next/head";
  import Header from "@components/Header";
  import Footer from "@components/Footer";
  import FeedbackForm from "@components/FeedbackForm";
  import JokeBlock from "@components/JokeBlock";
  import React, { useEffect } from "react";


  export default function Home() {
    useEffect(() => {
      const imageElement = document.querySelector(".bg-1") as HTMLElement;
      if (imageElement) {
        imageElement.style.opacity = "0.5";
      }
      const titleElement = document.querySelector(".title") as HTMLElement;
      if (titleElement) {
        titleElement.style.opacity = "1";
      }

    }, []);

    return (
      
      <div className="wrapper">
    
            <div className="fixed-bg bg-1">
            </div>
            <div className="title">The best online lessons start here</div>

            <div className="scroll-bg">
              <h3>
              Welcome to my online English learning sessions! Whether you're a beginner or an advanced learner, I'm here to guide you on your journey to fluency. With tailored lessons and interactive activities, we'll explore various aspects of English, including grammar, vocabulary, speaking, listening, reading, and writing. Through engaging conversations, role-plays, and exercises, you'll gain confidence in using English in real-life situations. Together, we'll focus on improving your pronunciation, sentence structure, and overall language skills. I provide a supportive and encouraging learning environment where you can ask questions and practice at your own pace. Let's embark on this exciting language learning adventure together!
              </h3>
            </div>

            <div className="fixed-bg bg-2">
              <h1>Fixed Background scrolling</h1>
            </div>
            
            
            <div className="fixed-bg bg-3">
              <h1>Fixed Background scrolling</h1>
            </div>

            <div className="scroll-bg">
              <h3>Make the test fill the whatever</h3>
              <FeedbackForm />            
            </div>

        </div>
      
    );
  }
