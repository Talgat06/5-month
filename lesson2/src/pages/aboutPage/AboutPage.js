import { useSelector } from "react-redux";

const AboutPage = () => {

    const aboutTitle = useSelector(state => state.aboutTitle)

    return (
        <h1>{aboutTitle}</h1>
    )
}

export default AboutPage;