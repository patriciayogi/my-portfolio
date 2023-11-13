import React, { useState } from 'react';

export default function Assignments({ newEvent }) {

  const [assignments, setAssignments] = useState([]);

  const handleAssignments = () => {

    const shuffledParticipants = shuffle(newEvent.participants.length);

    const newAssignments = newEvent.participants.map((participant, index) => ({
      giver: participant,
      receiver: newEvent.participants[shuffledParticipants[index]],
    }));

    setAssignments(newAssignments);
  };

  const shuffle = (participants) => {
    let shuffled = [];
    for (let i = 0; i < participants; i++) {
      let j = -1;
      while (shuffled.includes(j) || j==-1 || j==i-1){
        j = Math.floor(Math.random() * participants);
        if (i==participants-1 && i==j)
          return shuffle(participants);
      }        
      shuffled.push(j);
    }
    return shuffled;
  }  

  return (
    <section id="assignments">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="text-center mb-20">
          <h2>Secret Santa Assignments</h2>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleAssignments}>
            Start
          </button>
          <ul>
            {assignments.map((assignment, index) => (
              
              <li key={index} onClick={() => {navigator.clipboard.writeText(`Amigo secreto 2023:
              ${assignment.giver}, seu amigo secreto eh: ${assignment.receiver}`)}}>                
                {assignment.giver}, seu amigo secreto eh: {assignment.receiver}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
}