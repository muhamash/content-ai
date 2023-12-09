/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import TypingAnimation from "../animations/typing";

const onFinish = (value) =>
{
    console.log("registration data", value)
}

const onFinishFailed = ( err ) =>
{
    console.log("error log", err)
}

const Registration = () =>
{
    return (
        <div className='w-[40%] flex mx-auto bg-gradient-to-br from-green-500 via-violet-500 to-red-500 p-[1.5px] rounded-md shadow-md shadow-[#a0a4ef]'>
            <div className='bg-white w-full flex flex-col items-center rounded-md'>
                <div class="py-3">
                    <p class="text-2xl font-OpenSans font-semibold ">
                        <TypingAnimation message=" Welcome to Content-Ai " />
                    </p>
                </div>
                <Form
                    onFinish={ onFinish }
                    onFinishFailed={ onFinishFailed }
                    autoComplete="off"
                    
                >
                    
                </Form>
            </div>
        </div>
    )
};

export default Registration;