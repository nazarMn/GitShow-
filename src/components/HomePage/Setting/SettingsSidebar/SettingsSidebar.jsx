import React from 'react'
import './SettingsSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileLines, faBrain } from '@fortawesome/free-solid-svg-icons';

export default function SettingsSidebar() {
  return (
      <div className="settings-sidebar">
            <nav>
              <ul>
                <a href="/PublicProfileSettings">
                <li className="active">
                  <FontAwesomeIcon icon={faUser} /> Public profile
                </li>
                </a>
                <a href="/ResumeSettings">
                <li>
                  
                  <FontAwesomeIcon icon={faFileLines} /> Resume
                  
                </li>
                </a>
                <a href="/SkillsSettings">
                <li>
                  <FontAwesomeIcon icon={faBrain} /> Skills
                </li>
                </a>
                <a href="CVAISettings">
                <li>
                  <FontAwesomeIcon icon={faBrain} /> CV AI
                </li>
                </a>
              </ul>
            </nav>
          </div>
  )
}
