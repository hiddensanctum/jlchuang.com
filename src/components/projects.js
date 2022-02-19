import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import CohesionImage from './image-components/cohesion';
import SdotImage from './image-components/sdot';
import '../styles/projects.scss';

const Projects = () => (
  <div className='projects-viewport' name='projects' id='projects'>
    <div className='projects-layout'>
      <div className='projects-section'>
        <h2><FontAwesomeIcon icon={faDesktop} /> Projects</h2>
        <div className='projects-list'>
          <div className='project-card'>
            <a href='https://cohesiondata.ec.europa.eu/'>
              <CohesionImage />
              <h3>European Structural and Investment Funds</h3>
            </a>
            <p>The ESIF app is a React appliation that is designed to showcase how the EU is directing their investment funds through Europe. The app heavily relies on D3.js to create visualizations and heavily used in the EU. Recently the application won the <a href='http://ec.europa.eu/regional_policy/en/newsroom/news/2017/03/30-03-2017-esi-funds-open-data-platform-receives-the-award-for-excellence-in-open-administration'>Excellence in Open Administration</a> in 2017 by the European Ombudsman</p>
            <div className='project-technologies'>
              <svg viewBox='0 0 128 128'>
                <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
              </svg>
              <svg viewBox='0 0 128 128'>
                <path d='M118.16 63.966c5.223-6.256 8.368-14.217 8.368-22.98C126.528 21.097 110.352 5 90.464 5H47.986c10.375 7 18.966 16 24.82 26h17.658c5.55 0 10.064 4.45 10.064 10s-4.515 10-10.064 10H80.047c.82 5 1.26 8.62 1.26 13.098 0 4.41-.433 8.902-1.224 12.902h10.382c5.55 0 10.064 4.95 10.064 10.5S96.013 98 90.464 98H72.92c-1.315 2-2.79 4.74-4.38 6.98C63.137 112.59 56.253 119 48.29 124H90.463c19.335 0 35.16-15.746 36.024-34.876-.017.31-.043.39-.066.698.062-.848.107-1.813.107-2.678-.002-8.766-3.148-16.92-8.37-23.178z'></path><path d='M61.03 97.543l.003-.18c.07-.1.138-.292.207-.39.077-.118.152-.275.228-.392.002-.002 0-.03.003-.034 6.14-9.33 9.727-20.41 9.727-32.39C71.197 31.5 44.624 5 11.962 5H1v26h10.962c18.32 0 33.23 14.823 33.23 33.144 0 4.984-1.113 9.675-3.088 13.924-.006.013-.013.36-.02.374C36.79 89.782 25.283 98 11.963 98H1v26h10.962c20.396 0 38.41-10.722 49.068-26.457z'></path>
              </svg>
              <svg viewBox='0 0 128 128'>
                <path d='M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z'></path>
              </svg>
              <svg viewBox='0 0 128 128'>
                <path d='M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z'></path>
              </svg>
            </div>
          </div>
          <div className='project-card'>
            <a href='https://capitalprojects.seattle.gov/'>
              <SdotImage />
              <h3>Seattle Department of Transportation</h3>
            </a>
            <p>The Seattle Department of Transportation Capital Project Explorer App is an
              Angular.js app designed to allow citizens to get high level information about
              Transportation projects going around the city. This application has gone
              through multi iterations and is now a SASS product that is offered to multiple
              cities in USA and Canada.</p>
            <div className='project-technologies'>
              <svg viewBox='0 0 128 128'>
                <path d='M52.864 64h23.28l-12.375-25.877zM63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635-59.637-20.485zm-15.766 73.974l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.14100000000000001l.123-.274v.274h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082'></path>
              </svg>
              <svg viewBox='0 0 128 128'>
                <path d='M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z'></path>
              </svg>
              <svg viewBox='0 0 128 128'>
                <path d='M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
