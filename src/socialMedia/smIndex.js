import React from 'react';
import { SOCIAL_MEDIAS } from './smConstants';

class SocialMediaLinks extends React.Component{
    render(){
        return (
            <div className='socialMediaContainer'>
                {SOCIAL_MEDIAS.map(sm=>{
                    const {id,url,name,iconClass} = sm;
                        return(
                            <a href={url} key={id} className= {name} target= '_blank'><i className={iconClass}></i></a>
                        )
                    })}
            </div>
        )
    }
}
export default SocialMediaLinks;