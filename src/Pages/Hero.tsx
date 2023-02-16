import Nav from "./Nav";
import Button from "../components/Button";

const Hero = () => {
    return (
        <div className="relative w-screen px-4 desktop:w-full bg-profile">
                <Nav />
            <div className="font-bold text-[2.5rem] tablet:text-[4.5rem] desktop:text-xl pb-6 ">
                <div className="flex flex-col text-center mt-[300px] desktop:mt-40">
                    <div className="pt-6 desktop:text-left desktop:pt-0 desktop:ml-36">
                    <span>Nice to meet you!</span>
                    <div>
                        <span>I'm&nbsp;</span>
                            <span className="border-b-4 border-green">Adam Keyes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xs text-center px-4 desktop:text-left desktop:pt-10 desktop:ml-36 desktop:flex desktop:flex-col">
                <span>Based in the UK, I'm a front-end developer&nbsp;</span>
                <span>Passionate about building accessible web apps&nbsp;</span>
                <span>that users love.</span>
            </div>
            <div className="desktop:px-40 pt-6 mb-9 text-center desktop:text-left">
                <Button className="font-xs">CONTACT ME</Button>
            </div>
        </div> 
    )
}

export default Hero;