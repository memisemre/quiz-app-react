import React from 'react';
import { SOCIAL_MEDIAS } from './constants';
class SocialMediaLinks extends React.Component {
  render() {
    return (
      <div className='socialMediaContainer'>
        {SOCIAL_MEDIAS.map(socialMedia => {
          const { id, url, name, iconClass } = socialMedia;
          return <a
            href={url}
            key={id}
            className={name}
            target='_blank'
            rel='noreferrer'>
            <i className={iconClass}></i>
          </a>
        })}
      </div>
    )
  }
}
export default SocialMediaLinks;