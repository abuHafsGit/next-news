"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const ResgisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo_url = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userData = { name, photo_url, email, password }
        console.log(userData)
    }


    return (
        <div className=" container mx-auto justify-center items-center">
            <div className=" w-80 mx-auto h-[80vh] flex justify-center items-center">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Write your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="photo"
                        type="text"
                    >
                        <Label>Photo Url</Label>
                        <Input placeholder="Your profile pic url" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField className="w-full " name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full "
                                type={isVisible ? "text" : "password"}
                                placeholder="write password"

                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}

                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
}

export default ResgisterPage