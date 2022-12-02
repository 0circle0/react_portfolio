import Education from '../components/Education'
import WorkExpirence from '../components/WorkExperience'
import Skills from '../components/Skills'
import Qualifications from '../components/Qualifications'
import PersonalInfo from '../components/PersonalInfo'

export default function Resume() {
    return (
        <>
            <title>Resume</title>
            <a className="btn btn-primary position-fixed" href="https://download943.mediafire.com/srowos98onjg/uea2ls3m35nqb1p/Resume.pdf" download id="download">Download Resume</a>
            <h1 className="d-flex justify-content-center fw-bold mb-5 mb-lg-0" aria-label="name">Brian Paul Jensen II</h1>

            <PersonalInfo Address1="335 Clover Ave Apt 6"
                Address2="Cookeville TN 38501"
                Email="jensen_305@yahoo.com"
                LinkedIn="https://linkedin.com/in/circleworks/"
                Image="https://i.ibb.co/W5fXg39/face.jpg"
                ImageTitle="Brian Jensen" />

            <Qualifications />

            <Skills />

            <WorkExpirence />

            <Education />
        </>
    );
}