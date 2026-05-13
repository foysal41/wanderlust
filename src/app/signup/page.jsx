"use client";

import { Check } from "@gravity-ui/icons";
import { authClient } from "@/app/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { Card } from "@heroui/react";
import { redirect } from "next/navigation";


export default function SignUpPage() {

    const onSubmit = async(e) => {
        e.preventDefault()


        const  formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signUp.email
        ({
                email:user.email,
                password:user.password,
                name:user.name,
                image:user.image
               

            } )

           if(data){
            redirect('/')
           }
           if(error){
            alert("error ")
           }

    }


    const handleGoogleSignIn = async()=> {
        await authClient.signIn.social({
            provider:'google'
        })
    }

  return (
    <div className="max-w-7xl mx-auto my-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p>Start Your adventure with wanderlust</p>
        </div>
        <Card className="border rounded-none">
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit} >
      <TextField
        isRequired
        name="name"
        type="text" 
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
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


    <TextField
        
        name="image"
        type="url" 
      >
        <Label>Image</Label>
        <Input placeholder="Upload image" />
        <FieldError />
      </TextField>
      
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2 justify-center">
        <Button className={'rounded-none w-full bg-cyan-500'} type="submit">
          <Check />
          Create Account
        </Button>

      </div>
    </Form>
<div className="flex items-center gap-3 my-4">
  <Separator className="flex-1" />
  
  <div className="whitespace-nowrap">
    Or Sign up with Google
  </div>
  
  <Separator className="flex-1" />
</div>
    <div>
        <Button onClick={handleGoogleSignIn} className={'w-full rounded-none'}>Sign Up</Button>
    </div>
        </Card>
    </div>


  )
}
