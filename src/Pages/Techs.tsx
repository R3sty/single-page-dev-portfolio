import patternRing from "../assets/images/pattern-rings.svg"

    const techs = [
        ["HTML", "4 Years experience"],
        ["CSS", "4 Years experience"],
        ["Javascript", "4 Years experience"],
        ["Accessibility", "4 Years experience"],
        ["React", "4 Years experience"],
        ["Sass", "4 Years experience"],
    ];

const Techs = () => {
    return (
        <div className={`relative w-full px-4 bg-[url("./assets/images/pattern-rings.svg")]  
        bg-no-repeat bg-bottom desktop:px-40`}>
        <div className="border-t-2 border-grey text-center pt-10 pb-5 tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 text-grey relative">
            {techs.map((tech) => {
                return (
                    <div className="pb-4 tablet:text-left">
                        <div className="text-[2rem] font-bold tablet:text-l">{tech[0]}</div>
                        <div>{tech[1]}</div>
                    </div>
                )
            })}
            </div> 
            </div>
    )
    
}

export default Techs;