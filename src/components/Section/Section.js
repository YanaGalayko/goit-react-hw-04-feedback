import { SectionStyle,
         SectionTitle } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <SectionStyle>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionStyle>
    )
}