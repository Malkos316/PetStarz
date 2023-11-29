"use client";

import { useState } from "react";

export default function Questionnaire({AddQuestionnaire}) {

    const[homeEnvironment, setHomeEnvironment] = useState("");
    const[rentOrHome, setRentOrHome] = useState(false);
    const[squareFootage, setSquareFootage] = useState("");
    const[fosterCare, setFosterCare] = useState(false);
    const[householdExperience, setHouseholdExperience] = useState("");
    const[householdMembersAndAge, setHouseholdMembersAge] = useState("");
    const[ageRangeGender, setAgeRangeGender] = useState("");
    const[openToSpecialNeeds, setOpenToSpecialNeeds] = useState(false);
    const[otherPets, setOtherPets] = useState("");
    const[otherPetsSocialized, setOtherPetsSocialized] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const questionnaire = {
            homeEnvironment, 
            rentOrHome,
            squareFootage, 
            fosterCare, 
            householdExperience, 
            householdMembersAndAge, 
            ageRangeGender, 
            openToSpecialNeeds, 
            otherPets, 
            otherPetsSocialized
        };


        //to make sure it is working
        console.log(questionnaire);
        AddQuestionnaire(questionnaire);

        setHomeEnvironment("");
        setRentOrHome(false);
        setSquareFootage("");
        setFosterCare(false);
        setHouseholdExperience("");
        setHouseholdMembersAge("");
        setAgeRangeGender("");
        setOpenToSpecialNeeds(false);
        setOtherPets("");
        setOtherPetsSocialized("");
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-10">
                    <label>Describe your home environment</label>
                    <textarea 
                    required
                    type="text"
                    value={homeEnvironment} 
                    onChange={(e) => setHomeEnvironment(e.target.value)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Do you rent or own your home?</label>
                    <input 
                    required
                    type="checkbox"
                    value={rentOrHome} 
                    onChange={(e) => setRentOrHome(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>What is the approximate square footage of your home?</label>
                    <input 
                    required
                    type="text"
                    value={squareFootage} 
                    onChange={(e) => setSquareFootage(e.target.value)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Have you provided foster care before?</label>
                    <input 
                    required
                    type="checkbox"
                    value={fosterCare} 
                    onChange={(e) => setFosterCare(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Do any household members have experience with fostering?</label>
                    <textarea 
                    required
                    type="text"
                    value={householdExperience} 
                    onChange={(e) => setHouseholdExperience(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>    

                <div className="flex flex-col mb-10">
                    <label>Please list all household members and their ages</label>
                    <textarea 
                    required
                    type="text"
                    value={householdMembersAndAge} 
                    onChange={(e) => setHouseholdMembersAge(e.target.value)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>what age range/gender do you feel most comfortable fostering</label>
                    <textarea
                    required
                    type="text"
                    value={ageRangeGender}
                    onChange={(e) => setAgeRangeGender(e.target.value)}
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Are you open to fostering a pet with special needs/medical conditions</label>
                    <input 
                    required
                    type="checkbox"
                    value={openToSpecialNeeds} 
                    onChange={(e) => setOpenToSpecialNeeds(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Do you have another pet in the home?</label>
                    <textarea 
                    required
                    type="text"
                    value={otherPets} 
                    onChange={(e) => setOtherPets(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>

                <div className="flex flex-col mb-10">
                    <label>Have your other pets been socialized?</label>
                    <textarea 
                    required
                    type="text"
                    value={otherPetsSocialized} 
                    onChange={(e) => setOtherPetsSocialized(e.currentTarget.checked)} 
                    style={{ width: '50%' }} 
                    />
                </div>

            </form>
        </div>
    );

};
