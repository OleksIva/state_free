import React from 'react'

import { resourcesData } from '../config/Data';

function ResourcesPage() {
  return (
    <div>
      <ul>
        {resourcesData.map(resource => (
          <div key={resource.id}>
            <a href={'#section-' + resource.id}>
              {resource.title}
            </a>
            </div>
        ))}
      </ul>
      <div>
        {
          resourcesData.map(resource => (
            <div id={'section-'+resource.id}>
              <h1>{resource.title}</h1>
              {resource.content}
            </div>
          )
          )
        }
    </div>
    </div>
  );
}
export default ResourcesPage