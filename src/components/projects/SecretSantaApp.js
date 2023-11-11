import React, { useState } from 'react';
import EventForm from './EventForm';
import Assignments from './Assignments';

export default function SecretSantaApp() {
  const [event, setEvent] = useState(null);

  const handleEventCreation = (newEvent) => {
    setEvent(newEvent);
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
        Secret Santa
      </h1>

      {!event ? (
        <EventForm onCreateEvent={handleEventCreation} />
      ) : (
        <Assignments newEvent={event} />
      )}

    </div>
  );
}