import Nav from "./Nav";
import TextInput from "../components/TextInput";
import TextAreaInput from "../components/TextAreaInput";
import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
    name: string;
    email: string;
    message: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Input>();
    
    const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
    
    return (
        <div>
            <div className="desktop:flex desktop:flex-col-2 bg-darkGrey desktop:px-40 pt-6 ">
                <div className="text-center desktop:text-left ">
                    <h1 className="desktop:text-xl text-[2.5rem] pb-5">Contact</h1> 
                    <div className="pr-10 desktop:pr-80">
                        <span> I would love to hear about your project and how I </span>
                        <span>could help. Please fill in the form, and I'll get back </span>
                        <span>to you as soon as I possible</span>  
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                    <TextInput
                        input={register("name", {
                            required: "This field can't be empty.",
                            pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "No leading spaces!",
                            },
                        })}
                        fieldName="name"
                        error={errors.name?.message}
                    />
                    <TextInput
                        input={register("email", {
                            required: "This field can't be empty.",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Sorry, invalid format here",
                            },
                        })}
                        fieldName="email"
                        error={errors.email?.message}
                    />
                    <TextAreaInput
                        input={register("message", {
                            required: "This field can't be empty.",
                            pattern: {
                                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                message: "No leading spaces!",
                            },
                        })}
                        fieldName="message"
                        error={errors.message?.message}
                    />
                    <div className="py-8 flex justify-end mr-3">
                        <Button className="" type="submit">
                            SEND MESSAGE
                        </Button>
                    </div>
                </form>
                {Object.keys(errors).length > 0 && (
                    <div className="text-red-500 font-bold">
                        Please fix the errors above and try again.
                    </div>
                )}
            </div>
            <div className="border-b-2 border-grey desktop:mx-40 desktop:mb-4"></div>
            <Nav />
        </div>
    )
};

export default Contact;
