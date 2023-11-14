import React, { useState } from 'react';

export default function Assignments({ newEvent, resetEvent }) {

  const [assignments, setAssignments] = useState([]);

  const handleAssignments = () => {

    const shuffledParticipants = shuffle(newEvent.participants.length);

    const newAssignments = newEvent.participants.map((participant, index) => ({
      giver: participant,
      receiver: newEvent.participants[shuffledParticipants[index]],
    }));

    setAssignments(newAssignments);
  };

  const reset = () => {
    resetEvent(null);
  };

  const shuffle = (participants) => {
    let shuffled = [];
    for (let i = 0; i < participants; i++) {
      let j = -1;
      while (shuffled.includes(j) || j == -1 || j == i) {
        j = Math.floor(Math.random() * participants);
        if (i == participants - 1 && i == j)
          return shuffle(participants);
      }
      shuffled.push(j);
    }
    return shuffled;
  }

  const assign = (assignment) => {
    return `${assignment.giver}, seu amigo secreto eh: ${assignment.receiver}`;
  }

  return (
    <section id="assignments">
      <div className="container py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div>
          <h2 className="text-white sm:text-2xl mb-1 font-medium title-font">
            Event: {newEvent.name}
          </h2>
          <div className="py-2 flex space-x-2" >
          {!assignments.length && <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleAssignments}>
              {/* <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> */}Start
            </button>}
            <button
              onClick={reset}
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Go back
            </button>
          </div>
         {assignments.length > 0 && 
          <ul class="py-5 marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 bg-gray-800 border-0 rounded">
            {assignments.map((assignment, index) => (
              <li className={`${assignment.receiver === assignment.giver && "bg-indigo-500"}`} key={index} onClick={() => {
                navigator.clipboard.writeText(`Amigo secreto 2023:
                ${assign(assignment)}`)
              }}>
                {assign(assignment)}
              </li>
            ))}
          </ul>}
        </div>
      </div>
    </section>

  );
}