import Education from '../components/Education'
import WorkExpirence from '../components/WorkExperience'
import Skills from '../components/Skills'
import Qualifications from '../components/Qualifications'
import PersonalInfo from '../components/PersonalInfo'
import { useEffect, useState } from 'react'
import Certs from '../components/Certs'

export default function Resume() {
    let [print, setPrint] = useState(false);
    function Print() {
        setPrint(true);
    }
    useEffect(() => {
        if (print === true) {
            let elements = document.getElementsByClassName("hideOnPrint");
            for(let i = 0; i < elements.length; i++)
                elements[i].classList.add("d-none");
            window.print();
            for(let i = 0; i < elements.length; i++)
                elements[i].classList.remove("d-none");
            setPrint(false);
        }
    },[print])
    let showPrintButton = true;
    let button;
    if (showPrintButton) {
        button = <button className="btn btn-primary hideOnPrint" type="button" onClick={Print}>Print</button>
    }

    return (
        <>
            <title>Resume</title>
            
            {button}
            <a className="btn btn-primary hideOnPrint" href="https://download943.mediafire.com/srowos98onjg/uea2ls3m35nqb1p/Resume.pdf" download id="download">Download Resume</a>
            <h1 className="d-flex justify-content-center fw-bold mb-5 mb-lg-0" aria-label="name">Brian Paul Jensen II</h1>

            <PersonalInfo Address1="335 Clover Ave Apt 6"
                Address2="Cookeville TN 38501"
                Email="jensen_305@yahoo.com"
                LinkedIn="https://linkedin.com/in/circleworks/"
                Image="https://i.ibb.co/W5fXg39/face.jpg"
                ImageTitle="Brian Jensen" />

            <Qualifications />

            <Skills />

            <Certs />

            <WorkExpirence />

            <Education />

            
        </>
    );
}