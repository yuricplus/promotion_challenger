import axios from "axios";
import {NextRequest, NextResponse} from "next/server";

const axiosConfig = axios.create({
    baseURL: process.env.URL_API
})

export async function POST (request: NextRequest){
    const body = await request.json();
    
        const response = await axiosConfig.post('oauth/token', body)
        console.log(body)
        
        return NextResponse.json(response);
}