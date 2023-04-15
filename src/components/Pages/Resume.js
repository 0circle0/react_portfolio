import Education from '../Education'
import WorkExpirence from '../WorkExperience'
import Skills from '../Skills'
import Qualifications from '../Qualifications'
import PersonalInfo from '../PersonalInfo'
import Certs from '../Certs'
import { useCallback, useEffect, useMemo } from 'react'

const Resume = () => {

    const arrayOfElements = useMemo(() => {
        const elements = document.getElementsByClassName("hideOnPrint")
        return Array.from(elements)
    }, []);

    const print = useCallback(() => {
        arrayOfElements.forEach((e) => e.classList.add("d-none"));
        window.print();
        arrayOfElements.forEach((e) => e.classList.remove("d-none"));
    }, [arrayOfElements]);

    useEffect(() => {
        document.title = "Resume";
    }, [])

    return (
        <>
            <button className="btn btn-primary hideOnPrint" type="button" onClick={print}>Print</button>
            <h1 className="d-flex justify-content-center fw-bold mb-5 mb-lg-0" aria-label="name">Brian Paul Jensen II</h1>

            <PersonalInfo
                address1="335 Clover Ave Apt 6" address2="Cookeville TN 38501"
                email="jensen_305@yahoo.com" linkedIn="https://linkedin.com/in/circleworks/" />

            <Qualifications />
            <Skills />
            <Certs />
            <WorkExpirence />
            <Education />
        </>
    );
}

export default Resume;