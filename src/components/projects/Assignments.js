import React, { useState } from 'react';

export default function Assignments({ newEvent }) {

  const [assignments, setAssignments] = useState([]);

  const handleAssignments = () => {

    /** 
    
    Yumi,
    Massao,
    Celia,
    Yuri,
    Marcella,
    Haruki ,
    Adriana Haruki,
    Isabelli,
    Selma,
    Taeco,
    Nando,
    Deise,
    Eigi,
    Adriana Eigi,
    Juju,
    Kiki
     * 
    */

  
    const shuffledParticipants = shuffleArray(newEvent.participants);

    const newAssignments = newEvent.participants.map((participant, index) => ({
      giver: participant,
      receiver: shuffledParticipants[index],
    }));

    setAssignments(newAssignments);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    const participants = shuffledArray.length;
    let drawn = shuffle(participants);
    
    for (let i = 1; i < participants; i++) {      
      
      [shuffledArray[drawn[i-1]], shuffledArray[drawn[i]]] = [shuffledArray[drawn[i]], shuffledArray[drawn[i-1]]];
    }
    [shuffledArray[drawn[participants-1]], shuffledArray[drawn[0]]] = [shuffledArray[drawn[0]], shuffledArray[drawn[participants-1]]];
//    console.log(`shuffledArray ${shuffledArray} `);
// TODO fix
    return shuffledArray;
  };

  const shuffle = (participants) => {
    let drawn = [];
    
    for (let i = 0; i < participants; i++) {
      let j = -1;
      while (drawn.includes(j) || j==-1 || j==i+1){
        j = Math.floor(Math.random() * participants);
        if (i==participants-1 && i==j)
          return shuffle(participants);
      }        
      drawn.push(j);
    }
    console.log(`drawn ${drawn} `);    
    return drawn;
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