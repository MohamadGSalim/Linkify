import React, { useEffect, useState } from 'react'

import ProfileCover from '../profile/ProfileCover'
import HeadlineTop from '../profile/HeadlineTop'
import Experience from '../profile/Experience'
import Education from '../profile/Education'
import Skills from '../profile/Skills'
import Languages from '../profile/Languages'
import Projects from '../profile/Projects'

import profile_pic from "../../static/images/profile.jpg";

export default function UserProfile(props) {
    var profile = props.user;
    let profile_id = profile._id;
    var profile_name = profile.name;

    var skills = profile.skills;
    var languages = profile.languages;

    var experiences = profile.experience;
    var projects = profile.projects;

    // For Header Cover
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');

    useEffect(async () => {
        var occupations = await props.user.experience;
    
        occupations = occupations[occupations.length - 1];

        const pos_comma_split = occupations.indexOf(',');
        const company_comma_split = occupations.indexOf(',', (pos_comma_split + 1));
        const date_comma_split = occupations.indexOf(',', (company_comma_split + 1));
        const country_comma_split = occupations.indexOf(',', (date_comma_split + 1));
        const description_comma_split = occupations.indexOf(',', (country_comma_split + 1));

        var position_str = occupations.substring(0,pos_comma_split);
        var company_str = occupations.substring(pos_comma_split + 1, company_comma_split);
        var date_str = occupations.substring(company_comma_split + 1, date_comma_split);
        var country_str = occupations.substring(date_comma_split + 1, country_comma_split);
        var description_str = occupations.substring(country_comma_split + 1);

        setPosition(position_str);
        setCompany(company_str);
        setDate(date_str);
        setCountry(country_str);
        setDescription(description_str);
    });


    return (
        <div class="w-full lg:w-3/4 bg-white relative lg:rounded-t-xl">
            <ProfileCover name={profile_name} position={position} company={company}/>
            <hr/>
            
            <HeadlineTop profile={profile} company={company} profile_pic={profile_pic} getUser={props.getUser}/>
            <hr />
            
            <Experience id={profile_id} experiences={experiences} getUser={props.getUser} />

            <Education />

            <Skills id={profile_id} skills={skills} getUser={props.getUser}/>

            <Languages id={profile_id} languages={languages} getUser={props.getUser}/>

            <Projects id={profile_id} projects={projects} getUser={props.getUser} />
        </div>
    )
}
