import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Card from "./Card";

export interface FormData {
    domain: string;
};

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
`;

const Input = styled.input`
     padding: 10px;
     font-size: 24px;
     border-radius: 6px;
     width: 60%;
     height: 25px;
`;
const ControlWrapper = styled.div`
    margin: 10px;
`;

const ButtonWrapper = styled.span`
    text-align: right;
    margin-left: 8px;
`;

const Button = styled.button`
    font: inherit;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: #910404;
    border: 1px solid lightgrey;
    padding: 17px 60px 15px 60px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #ae0404f8;
    }
    &:active {
        background-color: #5a0101;
        border-color: #525252
    }
`;

interface FormProps  {
    onSubmit: SubmitHandler<FormData>;
};

const Form = (props: FormProps) => {
    const { register, handleSubmit } = useForm<FormData>();

    return (
        <Card>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <ControlWrapper>
                    <span>
                        <Label htmlFor="domain">Enter a Domain Name or IP Address</Label>
                        <Input {...register("domain")} id="domain" required />
                    </span>
                    <ButtonWrapper>
                        <Button>Lookup!</Button>
                    </ButtonWrapper>
                </ControlWrapper>
            </form>
        </Card>
    )
};

export default Form;