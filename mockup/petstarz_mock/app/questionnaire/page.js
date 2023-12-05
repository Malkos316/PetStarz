"use client";
import React, { useState } from 'react';
import QuestionnaireForm from './form';

export default function Page() {

    //home - describe your home environment
    //rent - Do you rent/own your house
    //footage - what is the approximate square footage 
    //previously - have you provided foster care before
    //experience - do any household members have experience with fostering 
    //members - please list all household members and their ages
    //age - what age range/gender do you feel most comfortable fostering
    //special - are you open to fostering a pet with special needs/medical conditions
    //another - Do you have another pet in the home
    //social - have your other pets been socialized

    const [questionnaire, setQuestionnaire] = useState([])

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);
    }

    return (
        <QuestionnaireForm onAddQuestion={handleAddQuestion} />
    )
}