import Socials
    from "../components/Socials";
const Nav = () => {
    return (
        <div className="flex flex-col tablet:justify-between desktop:flex desktop:flex-row desktop:justify-between desktop:px-40 w-full">
            <div className="text-m text-center">adamkeyes</div>
            <div><Socials/></div>
        </div>
    )
 }

export default Nav;