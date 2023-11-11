import React, { useState } from 'react';

const EventForm = ({ onCreateEvent }) => {
  const [eventName, setEventName] = useState('2023');
  const [participantsInput, setParticipantsInput] = useState("Yumi,Massao,Celia,Yuri,Marcella,Haruki,Adriana Haruki,Isabelli,Selma,Taeco,Nando,Deise,Eigi,Adriana Eigi,Juju,Kiki");

  const handleCreateEvent = () => {
    if (eventName.trim() !== '') {
      const participantsArray = participantsInput
        .split(',')
        .map((participant) => participant.trim());

      const newEvent = {
        name: eventName,
        participants: participantsArray,
      };

      onCreateEvent(newEvent);
    }
  };

  return (
    <section id="event">


      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="text-center mb-20">

          <h3 className="text-white sm:text-4xl text-2xl mb-1 font-medium title-font">
            New Event
          </h3>
         
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Details about the event
            </label>

            <input
              type="text"
              value={eventName}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEventName(e.target.value)}
            />

          </div>

          <div className="relative mb-4">

            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Participants (comma-separated):
            </label>
            <textarea
              id="participantsInput"
              rows="16" 
              value={participantsInput}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-100 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setParticipantsInput(e.target.value)}
            />
          </div>

          <button
            onClick={handleCreateEvent}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Create Event
          </button>



        </div>
      </div>
    </section>
  );
};

export default EventForm;