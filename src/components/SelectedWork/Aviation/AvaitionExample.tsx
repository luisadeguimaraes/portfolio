// src/components/AviationExamples.tsx
import styles from "../SelectedWork.module.css"
import portfolioData from "../../../SelectedWorkData";
import AviationDisplay from "./AviationDisplay";




const AviationExamples = () => {

    const aviationProject = portfolioData.find(project => project.id === 2);


      if (!aviationProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div 
             className={styles.projectItemContainer}>
            <div className={styles.headlineContainer}>
                <h2 className={styles.sampleWorkHeadline}>
                    {aviationProject.title} 
                </h2>
            </div>
            <AviationDisplay/>
            {/* Map over the descriptions array to display the content */}
            <div style={{ backgroundColor: aviationProject.backgroundColor }} className={styles.descriptionContainer}>
                {aviationProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 
                          style={{ color: aviationProject.secondaryColor }} 
                          className={styles.descriptionHeading}>
                            {desc.heading}
                        </h4>
                        <p 
                          className={styles.descriptionParagraph}
                          style={{ color: aviationProject.secondaryColor }}
                        >
                            {/* This is the new rendering logic for the paragraph */}
                            {desc.paragraph.map((part, partIndex) =>
                                part.bold ? (
                                    <strong key={partIndex}>{part.text}</strong>
                                ) : (
                                    <span key={partIndex}>{part.text}</span>
                                )
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AviationExamples;