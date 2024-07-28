
export const Header = ({autor, date}) => {
    return (
        <ul className="header__list">
            <li className="avatar"><img className="avatar__photo" src = {autor.photo}/></li>
            <li className="name">{autor.name}</li>
            <li className="check__mark"></li>
            <li className="email">{autor.nickname}</li>
            <li className="date">{date}</li>
        </ul>
    )
}