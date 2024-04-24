import React from 'react';
import { resourcesData } from './Data.tsx';


function List() {
  return (
    <ul>
      {resourcesData.map(resource => (
        <li key={resource.id}>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;