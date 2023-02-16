import Nav from "./Nav";
import Button from "../components/Button";

const Hero = () => {
    return (
        <div className={`relative w-screen px-4 bg-[url("./assets/images/image-profile-mobile.webp"),url("./assets/images/pattern-rings.svg"),url("./assets/images/pattern-circle.svg")]  
        bg-[position:top_center,_-320px_125px,_125%_40%]  bg-[size:174px_383px,_auto,_auto] bg-no-repeat`}>
                <Nav />
            <div className="font-bold text-[2.5rem] tablet:text-[4.5rem] desktop:text-xl pb-6 ">
                <div className="flex flex-col text-center mt-[300px]">
                    <div className="pt-6">
                    <span>Nice to meet you!</span>
                    <div>
                        <span>I'm&nbsp;</span>
                            <span className="border-b-4 border-green">Adam Keyes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xs text-center px-4">
                <span>Based in the UK, I'm a front-end developer&nbsp;</span>
                <span>Passionate about building accessible web apps&nbsp;</span>
                <span>that users love.</span>
            </div>
            <div className="desktop:px-40 pt-6 mb-9">
                <Button className="uppercase font-xs">Contact Me</Button>
            </div>
        </div> 
    )
}

export default Hero;