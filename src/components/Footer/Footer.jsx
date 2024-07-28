export const Footer = ({contents}) => {
    return (
        <ul className="footer__list">
            <li className="footer__item" dangerouslySetInnerHTML={{ __html: contents.com }}/>
            <li className="footer__item" dangerouslySetInnerHTML={{ __html: contents.rep }}/>
            <li className="footer__item" dangerouslySetInnerHTML={{ __html: contents.like }}/>
            <li className="footer__item" dangerouslySetInnerHTML={{ __html: contents.downld }}/>
        </ul>
    )
}