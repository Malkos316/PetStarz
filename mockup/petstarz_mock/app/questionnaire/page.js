"use client";
import React, { useState } from 'react';
import QuestionnaireForm from './form';

export default function Page() {

    //describe your home environment
    //Do you rent/own your house
    //what is the approximate square footage 
    //have you provided foster care before
    //do any household members have experience with fostering 
    //please list all household members and their ages
    //what age range/gender do you feel most comfortable fostering
    //are you open to fostering a pet with special needs/medical conditions
    //Do you have another pet in the home
    //have your other pets been socialized

    const [questionnaire, setQuestionnaire] = useState([])

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);

    }

    return (
        <QuestionnaireForm onAddQuestion={handleAddQuestion} />
    )
}