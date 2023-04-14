import Education from '../Education'
import WorkExpirence from '../WorkExperience'
import Skills from '../Skills'
import Qualifications from '../Qualifications'
import PersonalInfo from '../PersonalInfo'
import Certs from '../Certs'
import { useCallback } from 'react'

export default function Resume() {
    document.title = "Resume";
    
    const Print = useCallback(() => {
        const elements = document.getElementsByClassName("hideOnPrint");
        const arrayOfElements = Array.from(elements);
        arrayOfElements.forEach((e)=> e.classList.add("d-none"));
        window.print();
        arrayOfElements.forEach((e)=> e.classList.remove("d-none"));
    },[]);

    return (
        <>
            <button className="btn btn-primary hideOnPrint" type="button" onClick={Print}>Print</button>
            <h1 className="d-flex justify-content-center fw-bold mb-5 mb-lg-0" aria-label="name">Brian Paul Jensen II</h1>

            <PersonalInfo
                Address1="335 Clover Ave Apt 6" Address2="Cookeville TN 38501" 
                Email="jensen_305@yahoo.com" LinkedIn="https://linkedin.com/in/circleworks/" />

            <Qualifications />
            <Skills />
            <Certs />
            <WorkExpirence />
            <Education />
        </>
    );
}