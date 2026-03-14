export interface ApiResponse <T>{
    status:boolean;
    message:string;
    //data:any; //AS of now i cannot give any type, bcoz its keep on change
    data?:T;
}