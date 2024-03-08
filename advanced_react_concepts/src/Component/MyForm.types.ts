export interface FormData{
    title:string,
    subtitle:string,
    isSubmit?:boolean,
    data? :{
        firstName:string,
        lastName:string,
        DateOfBirdth:string
    }
}